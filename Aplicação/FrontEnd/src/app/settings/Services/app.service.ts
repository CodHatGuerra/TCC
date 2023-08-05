import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  
    userInfo: any;

    AlertMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['error']
      });
    }

    SuccessMessage(msg: string) :void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['success']
    })}

    InfoMessage(msg: string): void{
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['info']
    })}



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

  
 
  // SubmitPosto(posto: any): Observable<any> {
  //   const token = this.GetUser();
  //   const headers = new HttpHeaders().set('Validação', token)
  //   return this.http.post<any>(`${environment.baseUrl}${environment.posto}`, posto, { headers });
  // }
}