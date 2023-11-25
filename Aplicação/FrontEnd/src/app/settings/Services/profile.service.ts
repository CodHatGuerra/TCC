import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private service: AppService
  ) { }

  idProfile: number = 0;
  cpf: any;
  idadeUser: any;

  userToken = localStorage.getItem("Token");
  httpHeaders = new HttpHeaders({
    Authorization: `${this.userToken}`,
  });

  getCpf() {
    return this.cpf
  }

  setCpf(cpf: any) {
    this.cpf = cpf
  }

  getIdProfile() {
    return this.idProfile;
  }

  setIdProfile(id: number) {
    this.idProfile = id;
  }

  getUserById(id: number): Observable<any> {
    const user =
      this.http.get<any>(`http://localhost:8080/api/usuario/${id}`, {
        headers: this.httpHeaders,
      }) ?? this.service.AlertMessage("Não foi possível encontrar um funcionário");
    return user;
  }

  setidadeUser(id: any) {
    this.idadeUser = id
  }

  getIdadeUser() {
    return this.idadeUser;
  }

  idadeCalculo(data: any): any {
    const dataNascimento = new Date(data);
    const hoje = new Date();
    const diffMilissegundos = hoje.getTime() - dataNascimento.getTime();
    const diffAnos = Math.floor(
      diffMilissegundos / (365 * 24 * 60 * 60 * 1000)
    );
    return diffAnos;
  }
}
