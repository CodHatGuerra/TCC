import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, public dialog: MatDialog, private service: AppService) 
  { 
    this.User()    
  }

  user: any;

  User(){
    this.user = this.service.GetUser();
  }  
}


