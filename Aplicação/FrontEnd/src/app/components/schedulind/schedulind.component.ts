import { Component } from '@angular/core';

@Component({
  selector: 'app-schedulind',
  templateUrl: './schedulind.component.html',
  styleUrls: ['./schedulind.component.css']
})
export class SchedulindComponent {  constructor() { }

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
};
