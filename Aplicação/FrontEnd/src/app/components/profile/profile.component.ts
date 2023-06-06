import { AppService } from 'src/app/Services/app.service';
import { Component } from '@angular/core';

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
    const teste = this.service.getUser();
    this.infoUser = teste
  }
}