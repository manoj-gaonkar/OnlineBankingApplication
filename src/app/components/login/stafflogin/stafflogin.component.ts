import { Component } from '@angular/core';
import { LoginService } from './../../../services/login.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces/login';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})



export class StaffloginComponent {
  

  loginForm = new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });

  constructor(private formbuilder:FormBuilder,private loginService:LoginService,private router:Router,private authService:AuthService){
    this.loginForm = this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }



  wrongPasswordError:String|any = null;
  userNotExistError:String|any = null;
  notStaffError:String|any = null;
  onLogin():void{
    console.log(this.loginForm);
    if (this.loginForm.controls.username.value !== null && this.loginForm.controls.password.value !== null) {
      const user: Login = {
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
      };

      if(this.loginForm.valid)
      {
        this.userNotExistError=null;
        this.wrongPasswordError=null;
        this.notStaffError=null;
        this.loginService.loginStaff(user).subscribe(
        (response)=>{
          console.log(response.id);
          // changing authenticated to remove theuserlogin
          this.authService.setLoggedInStatus(true,response.id);
          this.router.navigateByUrl('landing');
          console.log("this is success");
        },
        (error)=>{
          console.log("this is error");
          console.log(error);
          if(error.error==="wrong password"){
            this.wrongPasswordError = "entered password is wrong";
          }
          else if(error.error==="user does not exist"){
            this.userNotExistError = error.error;
          }else if(error.error==="user is not authenticated"){
            this.notStaffError = error.error;
          }
        }
        );
      }
    }
  }
}
