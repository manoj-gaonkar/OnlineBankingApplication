import { Component,OnInit } from '@angular/core';
import { User } from '../../user';
import { RegisterserviceService } from '../../services/registerservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any;


  constructor(private registerService:RegisterserviceService,private formBuilder: FormBuilder,private router:Router){
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      password:['',Validators.required],
      // Add other form controls here
    });

  }

  users:User[]|any;
  // this is to show error in page
  usernameError:string|null = null ;

  userForm: FormGroup|any;

  user:User= new User();

  get formControls() {
    return this.userForm.controls;
  }

  onSubmit():void{
    console.log("enter");
    console.log(this.userForm.controls);
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(userData);
      console.log('inside enter');

      this.user.username = userData.username;
      this.user.email = userData.email;
      this.user.firstName = userData.firstname;
      this.user.lastName = userData.lastname;
      this.user.password = userData.password;
      // register user api request
      this.registerService.registerUser(this.user).subscribe(
        (response)=>{
          console.log(response);
          this.router.navigateByUrl('landing');
        },
        (error)=>{
          console.log(error.error.message);
          this.usernameError=error.error.message;
        }
      )
    } else {

    }    
  }

  ngOnInit(): void {
      // this.getAll();
  }

  private getAll(){
    this.registerService.getUserList().subscribe((response) => {
      // Success: handle the response data
      this.users = response;
      console.log(this.users);
    },
    (error) => {
      // Error: handle the error, if any
      console.error('Error fetching data:', error);
    }
    )};

}
