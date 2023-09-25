import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { environment } from "src/environments/environments";
import { Posto } from "src/app/components/interfaces";

@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  userToken = localStorage.getItem("Token");
  httpHeaders = new HttpHeaders({
    Authorization: `${this.userToken}`,
  });

  //variáveis
  id_Posto: any;
  userInfo: any;

  AlertMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3500,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["error"],
    });
  }

  Message(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["common"],
    });
  }

  SuccessMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["success"],
    });
  }

  InfoMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["info"],
    });
  }

  SetUser(user: any): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  IsUserLoggedIn(): boolean {
    const token = localStorage.getItem("Token");
    return !!token;
  }

  GetUser(): any {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  SetIdPosto(id: number) {
    this.id_Posto = id;
  }

  GetIdPosto(): number {
    return this.id_Posto!;
  }

  //retorna todos os postos
  GetPosto(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${environment.Posto}`, {
      headers: this.httpHeaders,
    });
  }

  DeletePosto(id: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/${environment.Posto}/${id}`,
      { headers: this.httpHeaders }
    );
  }

  //faz a requisição para retornar um posto
  GetByIdPosto(id: number): Observable<any> {
    const url = `http://localhost:8080/api/posto/${id}`;
    return this.http.get<any>(url, { headers: this.httpHeaders });
  }

  UpdatePosto(posto: any): Observable<Posto> {
    return this.http.put<Posto>(
      `${environment.baseUrl}/${environment.Posto}`,
      posto,
      { headers: this.httpHeaders }
    );
  }
}
