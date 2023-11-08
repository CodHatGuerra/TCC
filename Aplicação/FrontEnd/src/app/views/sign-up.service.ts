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
      data_Criada: '',
      imagem: null 
      
    },
    telefone: {
      numero: 0
    }
  }
}
