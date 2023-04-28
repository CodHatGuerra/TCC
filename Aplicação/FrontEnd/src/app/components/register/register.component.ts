import { Component} from '@angular/core';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor() { }

   pessoas = [
  {
    nome: 'Renata',
    idade: '26',
    profissao: 'Advogada',
    cidade: 'bariri'
  },
  {
    nome: 'Gabriel',
    idade: '27',
    profissao: 'Desenvolvedor de software',
    cidade: 'bauru'
  },
  {
    nome: 'Andressa',
    idade: '24',
    profissao: 'Veterinária',
    cidade: 'barra'
  },
  {
    nome: 'Maria',
    idade: '30',
    profissao: 'Médica',
    cidade: 'gotham'
  },
]
colunas: string[] = ['nome', 'idade', 'profissao'];
}
