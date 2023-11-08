export interface Posto  {
    posto: {
        nome: string,
        id: number
      },
    endereco: {
        cep: number,
        uf: string,
        localidade: string,
        bairro: string,
        logradouro: string,
        numero: number
    },
    telefone: {
      numero: number
    }
}

export interface Profile {
  usuario: {
	  nome: string,
	  cpf: number,
	  data_Nascimento: string,
	  sexo: string,
	  email: string,
	  data_Criada: string,
	  senha: number
	},
  telefone: {
    numero: number
  }
}