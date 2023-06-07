import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environments';
import { loginModel } from 'src/app/views/signin/signin.module';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  
  userInfo: any;

  alertMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['cor']
    });
    }

  setUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  isUserLoggedIn(): boolean {
    const token = localStorage.getItem('Token');
    return !!token;
  }
  
  signOut(): void {
    localStorage.removeItem('Token');
   }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  signUp(date: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}${environment.dbSignup}`,date);
  }

  error(e: any): Observable<any> {
    this.alertMessage('Ocorreu um erro')
    return EMPTY
  }

  signIn(login: loginModel): Observable<loginModel> {
    return this.http.post<loginModel>(`${environment.baseUrl}${environment.dbLogin}`, login);
  }

}
