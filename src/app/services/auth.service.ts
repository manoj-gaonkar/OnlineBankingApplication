import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserId = new BehaviorSubject<number|any>(undefined);

  setLoggedInStatus(status: boolean,id: number) {
    this.isLoggedInSubject.next(status);
    this.currentUserId.next(id);
  }

  getLoggedInStatus() {
    return this.isLoggedInSubject.asObservable();
  }

  getCurrentUserId(){
    return this.currentUserId.asObservable();
  }

  // private isAuthenticated:boolean=false;
  // private currentUserId:number|undefined = undefined;

  // setLoggedInStatus(authenticate:boolean,userId:number){
  //   this.isAuthenticated=authenticate;
  //   this.currentUserId=userId;
  // }

  // getAuthenticationStatus(){
  //   return this.isAuthenticated;
  // }

  // getCurrentUserId(){
  //   return this.currentUserId;
  // }
}
