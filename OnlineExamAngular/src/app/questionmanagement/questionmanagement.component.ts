import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Question, QuestionService } from '../question.service';

@Component({
  selector: 'app-questionmanagement',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './questionmanagement.component.html',
  styleUrl: './questionmanagement.component.css'
})
export class QuestionmanagementComponent {
  question:Question=new Question(0,'','','','','','','');

  constructor(private service:QuestionService)
  {

  }

  saveQuestion()
  {
    this.service.saveQuestion(this.question).subscribe();
  }
}
