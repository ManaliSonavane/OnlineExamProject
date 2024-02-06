import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit
{
    message:any='';
    subject:any='';
    question:Question= new Question(0,'','','','','','','')
    answer:Answer= new Answer(0,'','','');
    submittedAnswer:string="";
    remainingTime=20;
    examInterval:any;
    durationMessage:string="";
    allanswers:Answer[]=[];
    username:any='';

    constructor(private service:QuestionService, private router:Router){
      this.message= sessionStorage.getItem("message");
    
      this.subject= sessionStorage.getItem("subject");
      console.log("subject is" +this.subject);
      service.getFirstQuestion(this.subject).subscribe(question=>this.question=question);
    }
  
    ngOnInit(): void {
        this.examInterval= setInterval(()=>{

          this.remainingTime= this.remainingTime-1;           //120
          const min= Math.floor(this.remainingTime/60);       //2
          const sec= this.remainingTime%60;                   //00

          this.durationMessage = "Time remaining= " + min +":"+sec;

          if( this.remainingTime==0){
            this.endexam();
          }
        },1000);
    }

    nextQuestion(){
      this.service.nextQuestion().subscribe(question=>this.question=question);
      this.service.getAllAnswers().subscribe(answerarray=>this.allanswers=answerarray);
    }

    previousQuestion(){
      this.service.previousQuestion().subscribe(question=>this.question=question);
      this.service.getAllAnswers().subscribe(answerarray=>this.allanswers=answerarray);
    }

    saveAnswer(){
      this.answer.submittedAnswer= this.submittedAnswer;
      this.answer.originalAnswer= this.question.answer;
      this.answer.qno= this.question.qno;
      this.answer.qtext= this.question.qtext;

      this.service.saveAnswer(this.answer).subscribe();
      console.log("answer submitted");
    }

    endexam()
    {
      clearInterval(this.examInterval);
      this.router.navigate(['score']);
    }

    compare(currentOption:string)
    {
      for(var i=0;i<this.allanswers.length;i++)
      {
        var answer=this.allanswers[i];

          if(this.question.qno==answer.qno && answer.submittedAnswer==currentOption)
          {
            return "green";
          }
      }

      return "red";
  }
   
}
