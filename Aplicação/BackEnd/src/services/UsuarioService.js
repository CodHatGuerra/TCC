const db = require("../db");

module.exports = {
  inserir: (usuario, endereco, celular) => {
    return new Promise((aceito, rejeitado) => {
      let ID_Endereco = null;

      db.query(
        "INSERT INTO tb_usuario (Nome, Cpf, Rg, Sexo, Data_Nascimento, Email, Senha, data_Criada) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          usuario.nome,
          usuario.cpf,
          usuario.rg,
          usuario.sexo,
          usuario.data_Nascimento,
          usuario.email,
          usuario.senha,
          usuario.data_Criada,
          usuario.telefone,
        ],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          db.query(
            "INSERT INTO tb_endereco (Cep, Uf, Localidade, Bairro, Logradouro, Numero) VALUES (?, ?, ?, ?, ?, ?)",
            [
              endereco.cep,
              endereco.uf,
              endereco.localidade,
              endereco.bairro,
              endereco.logradouro,
              endereco.numero,
            ],
            (error, result) => {
              if (error) {
                console.log("ERRO ENDEREÇO");
                console.log(error);
                rejeitado(error);
                return;
              }
              if (result) {
                ID_Endereco = result.insertId;
              }
            }
          );
          db.query(
            "INSERT INTO tb_celular (Numero, TB_Usuario_ID_Usuario) VALUES (?, ?)",
            [celular.numero, results.insertId],
            (error, result) => {
              if (error) {
                console.log("ERRO NUMERO");
                console.log(error);
                rejeitado(error);
                return;
              }
              if (result) {
                ID_Endereco = result.insertId;
              }
            }
          );

          db.query(
            "INSERT INTO tb_usuario (ID_UsuarioNumero, , TB_Endereco_ID_Endereco  VALUES (?, ?)",
            [results.insertId, ID_Endereco],
            (error, result) => {
              if (error) {
                console.log("ERRO NUMERO");
                console.log(error);
                rejeitado(error);
                return;
              }
              if (result) {
                ID_Endereco = result.insertId;
              }
            }
          );
          aceito(results.insertId);
        }
      );
    });
  },
};
