  export interface UserModel {
    nome: string,
    cpf: number,
    rg: number,
    data_Nascimento: number;
    sexo: string,  
    email: string,
    data_Criada: number
    senha: string,
  }
  
  export interface AdressModel {
    cep: number
    uf: string,  
    logradouro: string,  
    bairro: string,  
    localidade: string,  
    numero: number
  }

export interface Form {
  nome: string,
  cpf: number,
  rg: number,
  data_Nascimento: number;
  sexo: string,  
  email: string,
  data_Criada: number,
  senha: string
}