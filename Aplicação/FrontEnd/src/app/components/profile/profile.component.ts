import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private appService: AppService) { }
}
