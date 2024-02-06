import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { QuestionmanagementComponent } from './questionmanagement/questionmanagement.component';


export const routes: Routes = [
    {path:'register',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'question',component:QuestionComponent},
    {path:'score',component:ScoreComponent},
    {path:'questionmanagement',component:QuestionmanagementComponent}
];
