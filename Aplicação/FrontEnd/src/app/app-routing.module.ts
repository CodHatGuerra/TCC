import { PostoDeleteComponent } from './components/postos/posto-delete/posto-delete.component';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { ApplicationComponent } from './components/application/application.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './settings/auth.guard';
import { SignInComponent } from './views/SignIn_SignUp/SignIn/SignIn.component';
import { AdmComponent } from './views/Adm/Adm.component';
import { SignUpComponent } from './views/SignIn_SignUp/SignUp/SignUp.component';
import { PostosComponent } from './components/postos/postos.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PostoUpdateComponent } from './components/postos/posto-update/posto-update.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
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
      }    
    ]
  },
  {
    path: 'adm',
    component: AdmComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ApplicationComponent
      },
      {
        path: 'application',
        component: ApplicationComponent
      },
      {
        path: 'schedulind',
        component: SchedulindComponent
      },
      {
        path: 'postos',
        component: PostosComponent,
        children: [
          {
          path: 'update/:id',
          component: PostoUpdateComponent
        },
        {
          path: 'delete/:id',
          component: PostoDeleteComponent
        },
      ]
      },
      {
        path: 'employee',
        component: EmployeesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
