import { Dialog } from '@angular/cdk/dialog';
import { TemplateService } from './../Template.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { DialogComponent } from './dialog/dialog.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: AppService, private router: Router, private dialog :MatDialog)
    { }

    SignOut(): void {
      const dialogRef = this.dialog.open(DialogComponent)
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          localStorage.removeItem('Token');
          this.router.navigate(['']);
        }
      });
    }
}

