import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ApplicationComponent } from './components/application/application.component';
import { SchedulindComponent } from './components/schedulind/schedulind.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HeaderComponent } from './components/template/header/header.component';
import { DecoratorsComponent } from './settings/decorator/decorators.component';
import { PostoCreateComponent } from './components/postos/posto-create/posto-create.component';
import { PostoDeleteComponent } from './components/postos/posto-delete/posto-delete.component';
import { PostoUpdateComponent } from './components/postos/posto-update/posto-update.component';

import { WhiteDirective } from './settings/directives/white.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { SignInComponent } from './views/SignIn/SignIn.component';
import { AdmComponent } from './views/Adm/Adm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/template/nav/dialog/dialog.component';
import { SignUpComponent } from './views/SignUp/SignUp.component';
import { MatMenuModule } from '@angular/material/menu';
import { AddVaccinessComponent } from './components/vacinas/add-vacciness/add-vacciness.component';
import { EmployeesCreateComponent } from './components/employees/employees-create/employees-create.component';
import { PostosComponent } from './components/postos/postos.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeUpdateComponent } from './components/employees/employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './components/employees/employee-delete/employee-delete.component';
import { ProfileUpdateComponent } from './components/profile/profile-update/profile-update.component';
import { CreatePassWordComponent } from './views/create-password/create-password.component';
import { VacinasDeleteComponent } from './components/vacinas/vacinas-delete/vacinas-delete.component';
import { VacinasAppComponent } from './components/vacinas/vacinas.component';
import { VacinasUpdateComponent } from './components/vacinas/vacinas-update/vacinas-update.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { CarteiraAddComponent } from './components/application/carteira-add/carteira-add.component';
import { CarteiraDeleteComponent } from './components/application/carteira-delete/carteira-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteDirective,
    SignUpComponent,
    ProfileComponent,
    SignInComponent,
    ApplicationComponent,
    SchedulindComponent,
    FooterComponent,
    NavComponent,
    DecoratorsComponent,
    UserComponent,
    AdmComponent,
    HeaderComponent,
    DialogComponent,
    PostoCreateComponent,
    PostoDeleteComponent,
    PostoUpdateComponent,
    AddVaccinessComponent,
    EmployeesCreateComponent,
    PostosComponent,
    EmployeesComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteComponent,
    ProfileUpdateComponent,
    CreatePassWordComponent,
    VacinasDeleteComponent,
    VacinasAppComponent,
    VacinasUpdateComponent,
    CarteiraAddComponent,
    CarteiraDeleteComponent,
    
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
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DatePipe,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    NgxMaskDirective, NgxMaskPipe,
    MatSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  providers: [ provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }

