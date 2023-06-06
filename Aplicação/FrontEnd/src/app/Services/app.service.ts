import { loginModel } from '../views/signin/signin.module';
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

  setUser(value: any) {
    this.userInfo = value;
  }

  getUser(): any {
    return this.userInfo
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
