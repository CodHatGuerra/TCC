import { Observable, EMPTY } from 'rxjs';
import { User } from '../views/ComponentsNav/enrroll/enrroll.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  Dbget = 'http://localhost:8080/get';
  Dbpost = 'http://localhost:8080/post';
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {  }
  
  alertMessage(msg: string): void{
    const config = new MatSnackBarConfig();
    config.panelClass = ['msg-success']
    config.duration = 3000;
    config.horizontalPosition = "right";
    config.verticalPosition = "top"
    this.snackBar.open(msg, 'X', config);
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
