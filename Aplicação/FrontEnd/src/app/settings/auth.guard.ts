import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './services/app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}

  canActivate(): boolean {
    if (this.appService.IsUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/signIn']); 
      return false;
    }
  }
}
