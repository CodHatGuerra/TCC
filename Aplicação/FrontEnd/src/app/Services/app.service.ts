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

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {  }

  alertMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['cor']
    });
  }
  
  signup(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.dbSignup}`, user);
  }

  error(e: any): Observable<any> {
    this.alertMessage('Ocorreu um erro')
    return EMPTY
  }
  
  login(login: loginModel): Observable<loginModel> {
    return this.http.post<loginModel>(`${environment.dbSignup}`, login);
  }
}
