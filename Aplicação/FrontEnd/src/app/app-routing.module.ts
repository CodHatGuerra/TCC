import { AdmComponent } from './views/Adm/Adm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { RegisterComponent } from './components/Register/Register.component';
import { HomeComponent } from './components/home/home.component';
import { SchedulindComponent } from './components/Schedulind/Schedulind.component';
import { ProfileComponent } from './components/Profile/Profile.component';
import { AuthGuard } from './settings/auth.guard';
import { PostosComponent } from './components/Postos/Postos.component';
import { SignInComponent } from './views/SignIn_SignUp/SignIn/SignIn.component';
import { SignUpComponent } from './views/SignIn_SignUp/SignUp/SignUp.component';

const routes: Routes = [
 { 
    path: '',
    component: SignInComponent
 },
 { 
    path: 'signup',
    component:  SignUpComponent
 }, 
 {
    path: 'user',
    component: UserComponent,
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
 },
 {
  path: 'adm',
  component: AdmComponent,
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
