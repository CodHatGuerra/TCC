import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/services/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  constructor(private service: AppService, private router: Router) {
    this.GetProfile()
   }

  infoUser:any[] = [];
  
  GetProfile() {
    const user = this.service.GetUser();
    if (user) {
      this.infoUser = user
    } 
   }
}