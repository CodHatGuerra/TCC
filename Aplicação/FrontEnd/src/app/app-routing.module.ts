import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './views/ComponentsHeader/profile/profile.component';
import { CalendarComponent } from './views/ComponentsNav/calendar/calendar.component';
import { SchedulindComponent } from './views/ComponentsNav/schedulind/schedulind.component';
import { RegisterComponent } from './views/ComponentsNav/register/register.component';
import { HomeComponent } from'./views/ComponentsHeader/home/home.component';
import { EnrrollComponent } from './views/ComponentsNav/enrroll/enrroll.component';
import { LoginComponent } from './views/ComponentsNav/login/login.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'profile',
  component: ProfileComponent
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'calendar',
  component: CalendarComponent
},{
  path: 'schedulind',
  component: SchedulindComponent
},{
  path: 'register',
  component: RegisterComponent
},{
  path: 'home',
  component: HomeComponent
},{
  path: 'enrroll',
  component: EnrrollComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
