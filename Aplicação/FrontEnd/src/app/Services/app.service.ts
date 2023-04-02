import { User } from '../views/enrroll/enrroll.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  DbLocal = 'http://localhost:8080/teste';

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
    return this.http.post<User>(this.DbLocal, user);
  }
}
