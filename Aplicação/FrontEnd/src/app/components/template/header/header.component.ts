import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, public dialog: MatDialog)
    {
      //this.teste = window.innerWidth < 660;
     // this.isMenuOpen = false;
    }

    dialogMessage = "Tem certeza que deseja sair?";
    //screenWidth: number = window.innerWidth; 

   // teste: boolean;
    //isMenuOpen: boolean = false;

    // @HostListener('window:resize', ['$event'])
    // onResize(event: any) {
    //   this.screenWidth = window.innerWidth;
    // }

    openLogoutDialog() {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '300px', 
      });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'confirm'){
        localStorage.removeItem('Token');
        this.router.navigate(['']);
        }
    })};
}


