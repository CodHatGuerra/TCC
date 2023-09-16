import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  userToken = localStorage.getItem('Token');
  httpHeaders = new HttpHeaders({
    'Authorization': `${this.userToken}`
  })

  userInfo: any;
  singlePosto: any;

  AlertMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['error']
    });
  }

  Message(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['common']
    })
  }

  SuccessMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['success']
    })
  }

  InfoMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['info']
    })
  }

  SetUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  IsUserLoggedIn(): boolean {
    const token = localStorage.getItem('Token');
    return !!token;
  }

  GetUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  GetPosto(): any {
    return this.http.get(`${environment.baseUrl}/${environment.Posto}`, {  headers: this.httpHeaders })
  }
  
  GetSinglePosto(): number {
    return this.singlePosto;
  }

  GetByIdPosto(id: number) {
   this.http.get(`${environment.baseUrl}/${environment.Posto}/${id}`, { headers: this.httpHeaders }).subscribe(()=>{

   })
    return this.singlePosto;
  }

}