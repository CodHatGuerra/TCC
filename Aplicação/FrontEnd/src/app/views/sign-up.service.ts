import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }

   Info = {
    usuario: {
      nome: '',
      cpf: 0,
      rg: 0,
      data_Nascimento: '',
      sexo: '',
      email: '',
      data_Criada: ''
      
    },
    endereco: {
      cep: 0,
      uf: '',
      localidade: '',
      bairro: '',
      logradouro: '',
      numero: ''
    },
    telefone: {
      numero: 0
    }
  }
}
