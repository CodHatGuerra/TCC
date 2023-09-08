import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { ApplicationComponent } from './components/application/application.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './settings/auth.guard';
import { SignInComponent } from './views/SignIn_SignUp/SignIn/SignIn.component';
import { AdmComponent } from './views/Adm/Adm.component';
import { SignUpComponent } from './views/SignIn_SignUp/SignUp/SignUp.component';
import { PostoDeleteComponent } from './components/register/posto-delete/posto-delete.component';
import { PostoCreateComponent } from './components/register/posto-create/posto-create.component';

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
    canActivate: [AuthGuard],
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
      }, {
        path: 'register',
        component: RegisterComponent,
        children: [
          {
            path: 'postos',
            component: PostoCreateComponent,
          },
          {
            path: 'posto/delete/:id',
            component: PostoDeleteComponent
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
