import { NavComponent } from './template/nav/nav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterLoginComponent } from './views/register-login/register-login.component';
import { SignupComponent } from './views/signup/signup.component'; 

//diretiva
import { WhiteDirective } from './directives/white.directive';

//Material
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card' 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './components/profile/profile.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AplicationComponent } from './views/aplication/aplication.component';
import { RegisterComponent } from './components/register/register.component';
import { MatTableModule } from '@angular/material/table';
import { DecoratorsComponent } from './decorator/decorators.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhiteDirective,
    SignupComponent,
    ProfileComponent,
    RegisterLoginComponent,
    AplicationComponent,
    NavComponent,
    HomeComponent,
    SchedulindComponent,
    RegisterComponent,
    DecoratorsComponent
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
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
