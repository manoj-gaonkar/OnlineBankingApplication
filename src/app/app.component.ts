import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineBanking';
  constructor(private router:Router,private authService:AuthService){
    this.authService.getLoggedInStatus().subscribe(
      (status)=>{
        this.isAuthenticated=status;
      }
    )
    this.authService.getCurrentUserId().subscribe(
      (id)=>{
        this.currentUserId=id;
      }
    )
  }

  isAuthenticated:boolean|any;
  currentUserId:number|any;

  ngOnInit(){
    this.isAuthenticated=false;
  }
  

  gotopage(page:String|any):void{
    console.log("enterr");
    this.router.navigate([`${page}`]);
  }
}
