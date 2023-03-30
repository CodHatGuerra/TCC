import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { EnrrollComponent } from './views/enrroll/enrroll.component';

//diretiva

import { WhiteDirective } from './template/white.directive';

//Material

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { RegisterComponent } from './views/register/register.component';
import { SchedulindComponent } from './views/schedulind/schedulind.component';


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
    SchedulindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
