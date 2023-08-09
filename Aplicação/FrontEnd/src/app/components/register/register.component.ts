import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environments';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private http: HttpClient, 
    private router: Router
    ){ }

    GetPostos(){
      this.http.get(`${environment.baseUrl}/${environment.Posto}`).subscribe(
        (response)=>{
          console.log(response);
        }
      )
    }

  pessoas = [
    {
     nome: 'Posto1',
     numero: '26',
     profissao: 'Advogada',
     cidade: 'bariri'
    },
    {
     nome: 'Posto 2',
     numero: '27',
     profissao: 'Desenvolvedor de software',
     cidade: 'bauru'
    },
    {
     nome: 'Posto 3',
     numero: '24',
     profissao: 'Veterinária',
     cidade: 'barra'
    },
    {
     nome: 'Posto 4',
     numero: '30',
     profissao: 'Médica',
     cidade: 'gotham'
    },
]
colunas: string[] = ['nome', 'numero', 'profissao', 'cidade'];
};

 