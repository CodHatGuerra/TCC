  export interface UserModel {
    id: null,
    nome: string,
    cpf: number,
    rg: number,
    data_Nascimento: number;
    sexo: string,  
    email: string,
    data_Criada: number
    senha: string,
  }
  
  export interface EndModel {
    cep: number
    uf: string,  
    logradouro: string,  
    bairro: string,  
    localidade: string,  
    numero: number
  }

export interface Telefone {
  numero: number
}

export interface CepModel {
  cep:number;
}

export interface Form {
  nome: string,
  cpf: number,
  rg: number,
  data_Nascimento: number;
  sexo: string,  
  email: string,
  data_Criada: number,
  senha: string,
  cep: number
  uf: string,  
  logradouro: string,  
  bairro: string,  
  localidade: string,  
  numero: number,
}