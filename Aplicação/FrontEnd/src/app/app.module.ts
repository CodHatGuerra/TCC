import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/Register/Register.component';
import { SchedulindComponent } from './components/Schedulind/Schedulind.component';
import { ProfileComponent } from './components/Profile/Profile.component';
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
import { SignUpComponent } from './views/SignIn_SignUp/SignUp/SignUp.component';
import { SignInComponent } from './views/SignIn_SignUp/SignIn/SignIn.component';
import { AdmComponent } from './views/Adm/Adm.component';
import { PostosComponent } from './components/Postos/Postos.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteDirective,
    SignUpComponent,
    ProfileComponent,
    SignInComponent,
    HomeComponent,
    SchedulindComponent,
    RegisterComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    DecoratorsComponent,
    UserComponent,
    AdmComponent,
    PostosComponent,
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
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

