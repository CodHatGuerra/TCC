import { Component } from '@angular/core';

@Component({
  selector: 'app-schedulind',
  templateUrl: './schedulind.component.html',
  styleUrls: ['./schedulind.component.css']
})
export class SchedulindComponent {
 produtos = [
  {
    nome: 'bala',
    preco: 1
  },
  {
    nome: 'bolacha',
    preco: 4
  },
  {
    nome: 'biz',
    preco: 5
  },
  {
    nome: 'carne',
    preco: 25
  },
  {
    nome: 'sabonete',
    preco: 4
  },
  {
    nome: 'shampoo',
    preco: 7
  },]

  colunas: string[]= ['coluna1','coluna2']
};
