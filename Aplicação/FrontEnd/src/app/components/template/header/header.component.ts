import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../nav/dialog/dialog.component';
import { AppService } from 'src/app/settings/Services/app.service';
import { ProfileService } from 'src/app/settings/Services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private service: AppService) 
  { 
    this.User()    
    this.service.metodoObservable$.subscribe(() => {
      this.User();
    });
  }
  
  ngOnInit(): void {
    this.User();
  }

  openLogoutDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        localStorage.removeItem('Token');
        this.router.navigate(['']);
      }
    })
  };

  user: any;

  User(){
    console.log("Teste");
    
    this.user = this.service.GetUser();
  }  
}


