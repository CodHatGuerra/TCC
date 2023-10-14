import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PostosService {

  constructor(private http: HttpClient) { }

  
  userToken = localStorage.getItem("Token");
  httpHeaders = new HttpHeaders({
    Authorization: `${this.userToken}`,
  });

  GetPosto(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${environment.Posto}`, {
      headers: this.httpHeaders,
    });
  }

   GetByIdPosto(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/posto/${id}`, { headers: this.httpHeaders });
  }
}
