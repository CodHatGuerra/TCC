import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicationComponent } from './views/aplication/aplication.component';
import { RegisterLoginComponent } from './views/register-login/register-login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { 
    path: '',
    component: RegisterLoginComponent 
 },{
    path: 'aplication',
    component: AplicationComponent
 },{
  path: 'register',
  component: RegisterComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
