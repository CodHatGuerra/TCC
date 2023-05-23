const db = require("../db");

module.exports = {
  inserir: (usuario, endereco, celular) => {
    let ID_Endereco = null;
    let ID_Usuario = null;

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO TB_Usuario (Nome, Cpf, Rg, Sexo, Data_Nascimento, Email, Senha, Data_Criada) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          usuario.nome,
          usuario.cpf,
          usuario.rg,
          usuario.sexo,
          usuario.data_Nascimento,
          usuario.email,
          usuario.senha,
          usuario.data_Criada,
          celular.numero,
        ],
        (error, results) => {
          if (error) {
            console.log("Erro Cadastro Usuario" + error);
            rejeitado(error);
            return;
          } else {
            ID_Usuario = results.insertId;

            new Promise((resolve, reject) => {
              db.query(
                "INSERT INTO TB_Endereco (Cep, Uf, Localidade, Bairro, Logradouro, Numero) VALUES (?, ?, ?, ?, ?, ?)",
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
                    reject(error);
                  } else {
                    ID_Endereco = result.insertId;
                    console.log(
                      "Execução com sucesso do insert TB_Endereco: " +
                        ID_Endereco
                    );
                    resolve();
                  }
                }
              );
            })
              .then(() => {
                return new Promise((resolve, reject) => {
                  db.query(
                    "INSERT INTO TB_Celular (Numero, TB_Usuario_ID_Usuario) VALUES (?, ?)",
                    [celular.numero, ID_Usuario],
                    (error) => {
                      if (error) {
                        console.log("ERRO NUMERO");
                        console.log(error);
                        reject(error);
                      } else {
                        resolve();
                      }
                    }
                  );
                });
              })
              .then(() => {
                return new Promise((resolve, reject) => {
                  db.query(
                    "UPDATE TB_Usuario SET TB_Endereco_ID_Endereco = ? WHERE ID_Usuario = ?",
                    [ID_Endereco, ID_Usuario],
                    (error, sucess) => {
                      if (error) {
                        console.log("ERRO NUMERO");
                        console.log(error);
                        reject(error);
                      } else {
                        resolve();
                      }
                    }
                  );
                });
              })
              .then(() => aceito(ID_Usuario))
              .catch((error) => {
                console.log(error);
                rejeitado(error);
              });
          }
        }
      );
    });
  },
};
