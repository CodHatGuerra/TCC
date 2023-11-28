import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../nav/dialog/dialog.component';
import { AppService } from 'src/app/settings/Services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: AppService) 
  { 
    this.User()    
  }
  ngOnInit(): void {
    this.User();
  }

  user: any;

  User(){
    this.user = this.service.GetUser();
  }  
}


