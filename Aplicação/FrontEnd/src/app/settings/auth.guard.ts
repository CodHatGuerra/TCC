import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './Services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}

  canActivate(): boolean {
    if (this.appService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/signin']); // Redirecionar para a página de login caso o usuário não esteja logado
      return false;
    }
  }
}
