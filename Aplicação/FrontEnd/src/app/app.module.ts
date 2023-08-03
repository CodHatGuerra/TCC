import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ApplicationComponent } from './components/application/application.component';
import { RegisterComponent } from './components/register/register.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { DecoratorsComponent } from './settings/decorator/decorators.component';

//diretiva
import { WhiteDirective } from './settings/directives/white.directive';

//Material
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card' 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserComponent } from './views/user/user.component';
import { SignInComponent } from './views/SignIn_SignUp/signIn/signin.component';
import { AdmComponent } from './views/adm/adm.component';
import { PostosComponent } from './components/postos/postos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/template/header/dialog/dialog.component';
import { HomeComponent } from './views/home/home.component'
import { SignUpComponent } from './views/SignIn_SignUp/signUp/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteDirective,
    SignUpComponent,
    ProfileComponent,
    SignInComponent,
    ApplicationComponent,
    SchedulindComponent,
    RegisterComponent,
    FooterComponent,
    NavComponent,
    DecoratorsComponent,
    UserComponent,
    AdmComponent,
    PostosComponent,
    HeaderComponent,
    DialogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

