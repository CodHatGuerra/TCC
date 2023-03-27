import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './views/profile/profile.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { SchedulindComponent } from './views/schedulind/schedulind.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from'./views/home/home.component';
import { EnrrollComponent } from './views/enrroll/enrroll.component';

const routes: Routes = [{
  path: 'profile',
  component: ProfileComponent
},{
  path: 'calendar',
  component: CalendarComponent
},{
  path: 'schudulind',
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
