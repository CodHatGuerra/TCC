const db = require("../db");

module.exports = {
  inserir: (nome, cpf, rg, sexo, senha, nascimento, email, data_Criada) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_usuario (Nome, Cpf, Rg, Sexo, Data_Nascimento, Email, Senha, data_Criada) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [nome, cpf, rg, sexo, nascimento, email, senha, data_Criada],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
