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


export interface celular {
  numero: number
}

export interface cepModel {
  cep:number;
}