import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './views/aplication/aplication.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { SignupComponent } from './views/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './views/signin/signin.component';
import { AuthGuard } from './settings/auth.guard';

const routes: Routes = [
  { 
    path: '',
    component: SigninComponent
 },
 { 
    path: 'signup',
    component:  SignupComponent 
 }, 
 {
    path: 'aplication',
    component: AplicationComponent,
    canActivate: [AuthGuard],
      children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'schedulind',
        component: SchedulindComponent 
      },
      {
        path: 'profile',
        component: ProfileComponent 
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
