import { Component,AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent {

  constructor(private userService:UserService){}
  ngAfterViewInit():void{
    this.userService.getTransactionList(7);
    console.log(this.userService.getCustomerDetails());
  }
}
