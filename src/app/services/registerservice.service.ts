import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  private baseurl="http://localhost:8080/api/v1.0/bank/allusers";
  private registerUrl="http://localhost:8080/api/v1.0/bank/createaccount";
  constructor(private httpClient:HttpClient) { }

  getUserList(): Observable<any>{
    return this.httpClient.get(`${this.baseurl}`);
  }


  registerUser(user:User):Observable<any>{
    return this.httpClient.post(`${this.registerUrl}`,user);
  }
}
