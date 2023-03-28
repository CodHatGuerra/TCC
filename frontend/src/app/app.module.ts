import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

//Material

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule} from '@angular/material/stepper';

//Components

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ProfileComponent } from './views/profile/profile.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { SchedulindComponent } from './views/schedulind/schedulind.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { WhiteDirective } from './components/template/White.directive';
import { EnrrollComponent } from './views/enrroll/enrroll.component';


@NgModule({
    declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProfileComponent,
    CalendarComponent,
    SchedulindComponent,
    RegisterComponent,
    HomeComponent,
    WhiteDirective,
    EnrrollComponent,
    Observable,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
