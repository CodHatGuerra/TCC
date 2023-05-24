class Usuario {
    constructor(id, nome, cpf, rg, sexo, dataNascimento, email, senha, dataCriada, funcionarioId, carteiraVacinaId, enderecoId) {
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.rg = rg;
      this.sexo = sexo;
      this.dataNascimento = dataNascimento;
      this.email = email;
      this.senha = senha;
      this.dataCriada = dataCriada;
      this.funcionarioId = funcionarioId;
      this.carteiraVacinaId = carteiraVacinaId;
      this.enderecoId = enderecoId;
    }
  }
  
  module.exports = Usuario;
  