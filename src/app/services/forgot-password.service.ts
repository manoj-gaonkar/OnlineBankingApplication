import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http:HttpClient) { }

  forgotPasswordUrl:string|any;


  changePassword(username:string,newpassword:string):Observable<any>{
    this.forgotPasswordUrl = `http://localhost:8080/api/v1.0/bank/${username}/forgot?password=${newpassword}`;
    return this.http.post(`${this.forgotPasswordUrl}`,null);
  }
}
