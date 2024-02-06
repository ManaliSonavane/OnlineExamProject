import { Component } from '@angular/core';
import { RegistrationService, User } from '../registration.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent 
{
  user : User = new User('','',0, 'd');
  
  constructor(private service:RegistrationService, private router:Router) {

  }

  saveUser(){
     this.service.saveUser(this.user).subscribe(answer=>{
      sessionStorage.setItem("message","Registration successful!!") 
      this.router.navigate(["login"])
     });
  }
}
