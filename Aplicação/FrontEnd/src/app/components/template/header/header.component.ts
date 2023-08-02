import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/settings/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: AppService, private router: Router)
    {
      this.teste = window.innerWidth < 660;
      this.isMenuOpen = false;
    }

    showEditDialog = false;
    dialogMessage = "Tem certeza que deseja sair?";
    screenWidth: number = window.innerWidth; 

    activeButton = 1;
    teste: boolean;
    isMenuOpen: boolean = false;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.screenWidth = window.innerWidth;
    }


  SignOut(): void {
    this.showEditDialog = true;
        localStorage.removeItem('Token');
        this.router.navigate(['']);
    };
  
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}


