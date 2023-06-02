import { AppService } from 'src/app/Services/app.service';
import { UserModel } from './../../views/signup/signup.module';
import { Component, OnInit, Input } from '@angular/core';
import { RegisterLoginComponent } from 'src/app/views/register-login/register-login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  constructor(private service: AppService) {
    this.teste()
   }


   infoUser:any[] = [];
   teste() {
    const teste = this.service.getConsoleValue();
    this.infoUser = teste
    console.log(teste);
    
  }
}