import { User } from './../views/signup/signup.module';
import { login } from './../views/register-login/register-login.module';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  dbLogin = 'http://localhost:8080/api/login';
  dbSignup = 'http://localhost:8080/api/usuario';
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {  }
  
  alertMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
    panelClass: ['msg-success'],
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  });
  }
  
  signup(user: User): Observable<User> {
    return this.http.post<User>(this.dbSignup, user);
  }

  error(e: any): Observable<any> {
    this.alertMessage('Ocorreu um erro')
    return EMPTY
  }
  
  login(login: login): Observable<login> {
    return this.http.post<login>(this.dbLogin, login);
  }
}
