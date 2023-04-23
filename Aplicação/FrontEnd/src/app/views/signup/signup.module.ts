export interface UserModel {
  id: null,
  nome: string,
  rg: number,
  cpf: number,
  email: string,
  telefone: number,
  sexo: string,  
  senha: string,
  cep: number
  uf: string,  
  logradouro: string,  
  localidade: string,  
  bairro: string,  
  numero: number
}

export interface cepModel {
  cep:number;
}