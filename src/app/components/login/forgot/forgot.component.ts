import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/app/services/forgot-password.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  constructor(private forgotService:ForgotPasswordService,private router:Router){

  }

  username:string|any=null;
  conpassword:string|any=null;

  passwordValidator(pass:string,confpass:string):boolean{
    return pass===confpass;
  }

  onSubmit():void{
    console.log(this.username,this.conpassword);
    this.forgotService.changePassword(this.username,this.conpassword).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigateByUrl('login');
        
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
