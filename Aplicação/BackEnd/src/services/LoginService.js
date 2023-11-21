const db = require("../db");

module.exports = {
  login: (cpf, senha) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
          SELECT
            Usuario.*,
            IF(Funcionario.ID IS NOT NULL, TRUE, FALSE) AS Funcionario
          FROM
            Usuario
          LEFT JOIN
            Funcionario ON Usuario.ID = Funcionario.Usuario_ID
          WHERE
            Usuario.Cpf = ? AND
            Usuario.Senha = ?
          LIMIT 1;
        `,
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
