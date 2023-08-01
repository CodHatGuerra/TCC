import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/Services/app.service';
import { DialogComponent } from '../../../settings/dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: AppService, private router: Router, private dialog :MatDialog)
    { }

    showEditDialog = false;

    titulo: string = "Deseja realmente sair?";
    // SignOut(): void {
    //   this.showEditDialog = true;
    //     if (result === true) {
    //       localStorage.removeItem('Token');
    //       this.router.navigate(['']);
    //     }
    //   });
    // }
}

