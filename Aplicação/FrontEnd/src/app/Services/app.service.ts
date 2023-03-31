import { User } from '../views/enrroll/enrroll.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  DbLocal = 'http://localhost:8080/teste'

  constructor(private http: HttpClient) {  }

  newUser(user: User): Observable<User> {
    return this.http.post<User>(this.DbLocal, user)
  }
}
