import { Observable, EMPTY } from 'rxjs';
import { User } from '../components/enrroll/enrroll.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  Dbget = 'http://localhost:8080/get';
  Dbpost = 'http://localhost:8080/post';
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {  }
  
  alertMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
    panelClass: ['msg-success'],
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  });
  }
  
  newUser(user: User): Observable<User> {
    return this.http.post<User>(this.Dbpost, user);
  }

  errorteste(e: any): Observable<any> {
    this.alertMessage('Ocorreu um erro')
    return EMPTY
  }
  
  read(): Observable<User[]> {
    return this.http.get<User[]>(this.Dbget)
  }
}
