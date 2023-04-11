const db = require("../db");

module.exports = {
  login: (cpf, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM usuario WHERE cpf = ? AND senha = ? LIMIT 1",
        [cpf, senha],
        (error, results) => {
          if (error) {
            console.error("Erro ao buscar usuário no banco de dados: ", error);
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            results.autenticado = true;
            aceito(results);
            return;
          } else {
            results.autenticado = false;
            aceito(results);
          }
        }
      );
    });
  },
};
