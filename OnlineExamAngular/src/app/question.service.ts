import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpclient:HttpClient) {


   }

  getFirstQuestion(subject:string){
    return this.httpclient.get<Question>("http://localhost:8080/getFirstQuestion/"+ subject);
  //to get value "+ subject" 
  }

  nextQuestion():Observable<Question>
  {
    return this.httpclient.get<Question>("http://localhost:8080/nextQuestion");
  }

  previousQuestion():Observable<Question>
  {
    return this.httpclient.get<Question>("http://localhost:8080/previousQuestion");
  }

  saveAnswer(answer:Answer):Observable<void>
  {
    return this.httpclient.post<void>("http://localhost:8080/saveAnswer", answer);
  }

  endexam()
  {
    return this.httpclient.get<number>("http://localhost:8080/endexam");
  }

  getAllAnswers(){
    return this.httpclient.get<Answer[]>("http://localhost:8080/allAnswers");
  }

  saveQuestion(question:Question):Observable<void>
  {
     return this.httpclient.post<void>("http://localhost:8080/saveQuestion",question);    
  }

  getAllSubjects()
  {
    return this.httpclient.get<string[]>("http://localhost:8080/getAllSubjects");
  }

}

export class Question
{
  qno:number;
	subject:string;
  qtext:string;
  op1:string;
  op2:string;
  op3:string;
  op4:string;
  answer:string;

   constructor(qno:number,subject:string,qtext:string,op1:string,op2:string,op3:string,op4:string,answer:string)
   {
    this.qno=qno;
    this.answer=answer;
    this.op1=op1;
    this.op2=op2;
    this.op3=op3;
    this.op4=op4;
    this.answer=answer;
    this.subject=subject;
    this.qtext=qtext;
   }
}

export class Answer
{
  qno:number;
	submittedAnswer:string;
  qtext:string;
  originalAnswer:string;
  
  constructor(qno:number,qtext:string,submittedAnswer:string,originalAnswer:string)
  {
      this.qno=qno;
      this.originalAnswer=originalAnswer;
      this.submittedAnswer=submittedAnswer;
      this.qtext=qtext;
  }
    
}

