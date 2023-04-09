import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './views/aplication/aplication.component';
import { RegisterLoginComponent } from './views/register-login/register-login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { EnrrollComponent } from './views/enrroll/enrroll.component';

const routes: Routes = [
  { 
    path: '',
    component: RegisterLoginComponent 
 },
 { 
    path: 'enrroll',
    component: EnrrollComponent 
 },
 {
    path: 'aplication',
    component: AplicationComponent,
    children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'schedulind',
      component: SchedulindComponent 
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
