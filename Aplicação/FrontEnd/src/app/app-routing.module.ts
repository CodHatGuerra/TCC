import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { ApplicationComponent } from './components/application/application.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './settings/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { SignInComponent } from './views/SignIn_SignUp/signIn/signin.component';
import { AdmComponent } from './views/adm/adm.component';
import { PostosComponent } from './components/postos/postos.component';
import { SignUpComponent } from './views/SignIn_SignUp/signUp/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'signIn',
    component: SignInComponent
 },
 { 
    path: 'signUp',
    component:  SignUpComponent
 }, 
 {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
      children: [
      {
        path: '',
        component: ApplicationComponent
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
 },
 {
  path: 'adm',
  component: AdmComponent,
  children: [
    {
      path: 'application',
      component: ApplicationComponent
    },
    {
      path: 'schedulind',
      component: SchedulindComponent 
    },
    {
      path: 'profile',
      component: ProfileComponent 
    },{
      path: 'register',
      component: RegisterComponent,
      children: [  {
        path: 'postos',
         component: PostosComponent,
     }]
    },
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
