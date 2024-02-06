import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class User{
 username:string;
 password:string;
 mobno:number;
 emailid:string;

 constructor(username:string, password:string, mobno:number, emailid:string){
 this.username=username;
 this.password= password;
 this.mobno=mobno;
 this.emailid=emailid;
 }
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpclient: HttpClient) {

   }

   saveUser(user:User){
     return this.httpclient.post<void>("http://localhost:8080/saveUser", user);
   }
}
