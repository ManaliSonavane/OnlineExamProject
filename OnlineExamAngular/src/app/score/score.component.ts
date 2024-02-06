import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Answer, QuestionService } from '../question.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit
{
    totalscore:number=0;
    allanswers:Answer[]=[];
    constructor(private questionservice:QuestionService){

    }
  
    ngOnInit(): void {
     this.questionservice.endexam().subscribe(score=> this.totalscore= score);
     
     this.questionservice.getAllAnswers().subscribe(answerarray=>this.allanswers=answerarray);
    }

    getColor(submittedAnswer:string, originalAnswer:string){
      if(submittedAnswer==originalAnswer){
         return "green";
      }
      else{
        return "red";
      }
    }
}
