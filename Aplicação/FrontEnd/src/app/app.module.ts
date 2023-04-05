import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Components
import { LoginComponent } from './views/ComponentsNav/login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { CalendarComponent } from './views/ComponentsNav/calendar/calendar.component';
import { EnrrollComponent } from './views/ComponentsNav/enrroll/enrroll.component';

//diretiva

import { WhiteDirective } from './directives/white.directive';

//Material

import { MatCardModule } from '@angular/material/card' 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './views/ComponentsHeader/home/home.component';
import { ProfileComponent } from './views/ComponentsHeader/profile/profile.component';
import { RegisterComponent } from './views/ComponentsNav/register/register.component';
import { SchedulindComponent } from './views/ComponentsNav/schedulind/schedulind.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    WhiteDirective,
    EnrrollComponent,
    CalendarComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    SchedulindComponent,
    LoginComponent
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
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
