import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router){ }
  // botao(){
  //   this.router.navigate(["postos"]);
  //   console.log("funcionando")
  // }

  pessoas = [
    {
     nome: 'Posto1',
     numero: '26',
     profissao: 'Advogada',
     cnumero: 'bariri'
    },
    {
     nome: 'Posto 2',
     numero: '27',
     profissao: 'Desenvolvedor de software',
     cnumero: 'bauru'
    },
    {
     nome: 'Posto 3',
     numero: '24',
     profissao: 'Veterinária',
     cnumero: 'barra'
    },
    {
     nome: 'Posto 4',
     numero: '30',
     profissao: 'Médica',
     cidade: 'gotham'
    },
]
colunas: string[] = ['nome', 'numero', 'profissao'];
};

 