import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  customerDetails:any;

  setCustomerDetails(details:any):any{
    this.customerDetails = details;
  }

  getCustomerDetails():any{
    return this.customerDetails;
  }
}
