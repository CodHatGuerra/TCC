import { UserModel } from './../views/signup/signup.module';
import { loginModel } from './../views/register-login/register-login.module';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environments';

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

  setConsoleValue(value: any) {
    this.userInfo = value;
  }

  getConsoleValue(): any {
    return this.userInfo
  }
  
  signup(date: any): Observable<any> {
    return this.http.post<any>(`${environment.dbSignup}`,date);
  }

  error(e: any): Observable<any> {
    this.alertMessage('Ocorreu um erro')
    return EMPTY
  }
  
  login(login: loginModel): Observable<loginModel> {
    return this.http.post<loginModel>(`${environment.dbLogin}`, login);
  }
}
