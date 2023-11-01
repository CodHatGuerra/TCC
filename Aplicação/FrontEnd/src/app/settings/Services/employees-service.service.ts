import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { AppService } from "src/app/settings/Services/app.service";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private service: AppService
  ) {}
  userToken = localStorage.getItem("Token");
  httpHeaders = new HttpHeaders({
    Authorization: `${this.userToken}`,
  });

  postoId: number = 0;
  userId: number = 0;

  getEmployeeByPosto(idPosto: number): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/funcionario/posto/${idPosto}`,
      { headers: this.httpHeaders }
    );
  }
  
  setIdFuncionario(id: number){
    this.userId = id;
  }

  getIdFuncionario(){
    return this.userId;
  }

  getAllEmployee(): Observable<any> {
    return this.http.get<any>(
      `http://localhost:8080/api/funcionario`,
      { headers: this.httpHeaders }
    );
  }

  setIdPosto(idPosto: number) {
    this.postoId = idPosto;
  }

  getIdPosto() {
    return this.postoId;
  }

  getUserByCpf(cpf: number): Observable<any> {
    const user =
      this.http.get<any>(`http://localhost:8080/api/usuario/cpf/${cpf}`, {
        headers: this.httpHeaders,
      }) ?? this.service.AlertMessage("Não foi possível encontrar um usuário");
    return user;
  }

  deleteEmployee(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/funcionario/${id}`, {
      headers: this.httpHeaders,
    });
  }

  postEmployee(obj: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/funcionario`, obj, {
      headers: this.httpHeaders,
    });
  }

  getAllPostoEmployee(): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/funcionario/posto`,)
  }
}
