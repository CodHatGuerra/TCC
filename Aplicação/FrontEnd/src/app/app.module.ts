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
import { SignupComponent } from './views/signup/signup.component'; 
import { DecoratorsComponent } from './decorator/decorators.component';
import { SigninComponent } from './views/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { AplicationComponent } from './views/aplication/aplication.component';
import { ProfileComponent } from './components/profile/profile.component';

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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WhiteDirective,
    SignupComponent,
    ProfileComponent,
    SigninComponent,
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
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
