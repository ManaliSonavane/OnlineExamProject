import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient:HttpClient) {

   }

  validate(user:User){
       return this.httpclient.post<boolean>("http://localhost:8080/validate",user);
  }
}
