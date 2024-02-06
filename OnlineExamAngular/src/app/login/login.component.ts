import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../registration.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit
{
  message:any='';
  user : User = new User('','',0, 'd');
  subject:string="";
  allsubjects:string[]=[]

  constructor(private service:LoginService, private router:Router,private questionservice:QuestionService){
        this.message= sessionStorage.getItem("message");
  }

  ngOnInit(): void {
      this.questionservice.getAllSubjects().subscribe(answer=>this.allsubjects=answer);
  }

  validate(){
      this.service.validate(this.user).subscribe(answer=>{
       if(answer && this.user.username=="admin"){
        this.router.navigate(['questionmanagement']);
       }
        else if(answer){
          sessionStorage.setItem("message","Welcome " + this.user.username)
          sessionStorage.setItem("subject", this.subject) ; 
          this.router.navigate(["question"])
        }
        else{
          this.message="Wrong credentials"; 
          this.router.navigate(["login"])
        }
      });
  }
}
