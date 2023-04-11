const db = require("../db");

module.exports = {
  inserir: (
    nome,
    cpf,
    rg,
    sexo,
    email,
    telefone,
    senha
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO usuario (nome, cpf, rg, sexo, email, telefone, senha) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          nome,
          cpf,
          rg,
          sexo,
          email,
          telefone,
          senha,
        ],
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
