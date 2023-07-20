import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUrl:string | any;
  loginUser(loginUser:Login):Observable<any>{
    this.loginUrl =  "http://localhost:8080/api/v1.0/bank/login/customer";
    return this.http.post(`${this.loginUrl}`,loginUser);
  }

  loginAdmin(loginUser:Login):Observable<any>{
    this.loginUrl =  "http://localhost:8080/api/v1.0/bank/login/admin";
    return this.http.post(`${this.loginUrl}`,loginUser)
  }
}
