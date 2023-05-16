const db = require("../db");

module.exports = {
  inserir: (usuario) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO tb_usuario (Nome, Cpf, Rg, Sexo, Data_Nascimento, Email, Senha, data_Criada) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [usuario.nome, usuario.cpf, usuario.rg, usuario.sexo, usuario.data_Nascimento, usuario.email, usuario.senha, usuario.data_Criada],
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
