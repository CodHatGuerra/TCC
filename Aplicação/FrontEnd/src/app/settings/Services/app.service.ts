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
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  userToken = localStorage.getItem("Token");
  httpHeaders = new HttpHeaders({
    Authorization: `${this.userToken}`,
  });

  //variáveis
  id_Posto: any;
  id_Vacina: any;
  userInfo: any;
  idVacinaCarteira: number = 0;
  idCarteira: number = 0;

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
  DeletePosto(id: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/${environment.Posto}/${id}`,
      { headers: this.httpHeaders }
    );
  }

  setVacinaCarteira(id: number){
    this.idVacinaCarteira = id
  }

  getVacinaCarteira(){
    return this.idVacinaCarteira
  }

  getCarteira(){
    return this.idVacinaCarteira
  }

  setCarteira(id: number){
    this.idCarteira = id
  }

  getIdVacina(){
    return this.id_Vacina
  }

  setIdVacina(id: number){
    this.id_Vacina = id;
  }
 
  UpdatePosto(posto: Posto): Observable<any> {
    return this.http.put<Posto>(
      `${environment.baseUrl}/${environment.Posto}`,
      posto,
      { headers: this.httpHeaders }
    );
  }

  DeleteVacinaCarteira(idCateira: number, idVacina: number){
    return this.http.delete<any>(`http://localhost:8080/api/carteira/${idCateira}/${idVacina}`, { headers: this.httpHeaders })
  }

  GetUserByCpf(cpf: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/usuario/${cpf}`,  { headers: this.httpHeaders })
  }

  GetAllVacinas(): Observable<any>{
   return this.http.get<any>('http://localhost:8080/api/vacina', { headers: this.httpHeaders })
  }
  
  CreateCarteira(obj: any): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/carteira', obj ,{ headers: this.httpHeaders })
   }

  GetByVacinas(id: number): Observable<any>{
   return this.http.get<any>(`http://localhost:8080/api/vacina/${id}`, { headers: this.httpHeaders })
  }

  DeleteVacinas(id: number): Observable<any>{
   return this.http.delete<any>(`http://localhost:8080/api/vacina/${id}`, { headers: this.httpHeaders })
  }

  UpdateVacina(obj: any): Observable<any>{
    return this.http.put<any>(`http://localhost:8080/api/vacina`, obj, { headers: this.httpHeaders })
  }

  GetVacinasCarteira(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/carteira/${id}` , { headers: this.httpHeaders }) 
  }

}
