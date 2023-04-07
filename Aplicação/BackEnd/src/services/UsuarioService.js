const db = require("../db");

module.exports = {
  inserir: (nome,cpf,rg,sexo,data_nascimento,estado_civil,email,numero,nacionalidade,rua,bairro,estado,cep) => {
    return new Promise((aceito, rejeitado) => {
      db.query("INSERT INTO usuario (nome, cpf, rg, sexo, data_nascimento, estado_civil, email, numero, nacionalidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)" , [nome, cpf, rg, sexo, data_nascimento, estado_civil, email, numero, nacionalidade] , (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo);
        }
      );
    });
  },
};
