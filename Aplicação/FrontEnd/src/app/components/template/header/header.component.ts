import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: AppService, private router: Router) { }  

  SignOut() {
    this.service.SignOut();
    this.router.navigate([''])
  }
}

