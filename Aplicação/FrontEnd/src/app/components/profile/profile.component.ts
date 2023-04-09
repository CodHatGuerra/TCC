import { Component, OnInit } from '@angular/core';
import { User } from '../enrroll/enrroll.module';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users!: User[]
  
  constructor(private appService: AppService) { }

  ngOnInit(): void { 
    this.appService.read().subscribe(users => {
      this.users = users
      console.log(this.users)
    })
  }
} 
