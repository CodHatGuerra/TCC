export interface Posto  {
    posto: {
        nome: string
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