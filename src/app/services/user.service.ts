import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  customerDetails:any;

  setCustomerDetails(details:any):any{
    this.customerDetails = details;
  }

  getCustomerDetails():any{
    return this.customerDetails;
  }

  registerUrl:string|any;
  getTransactionList(userid:number):Observable<any>{
    this.registerUrl=`http://localhost:8080/api/v1.0/bank/${userid}/alltransactions`;
    return this.httpclient.post(`${this.registerUrl}`,null);
  }
}
