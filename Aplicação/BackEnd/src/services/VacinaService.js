const db = require("../db");

module.exports = {
  alterar: (posto, endereco, telefone) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE Posto SET Nome = ? WHERE ID = ?;",
        [posto.nome, posto.id],
        (error, results) => {
          if (error) {
            console.log("Erro na alteração de dados do Posto" + error);
            rejeitado(error);
            return;
          } else {
            Posto_ID = results.insertId;

            new Promise((resolve, reject) => {
              db.query(
                `
                UPDATE 
                  Endereco
                SET
                  Cep = ?,
                  Uf = ?,
                  Localidade = ?,
                  Bairro = ?,
                  Logradouro = ?,
                  Numero = ?
                WHERE
                  Posto_ID = ?;
                `,
                [
                  endereco.cep,
                  endereco.uf,
                  endereco.localidade,
                  endereco.bairro,
                  endereco.logradouro,
                  endereco.numero,
                  posto.id,
                ],
                (error, result) => {
                  if (error) {
                    console.log(
                      "ERRO NA REQUISIÇÃO PARA ALTERAR O ENDEREÇO DO POSTO !"
                    );
                    console.log(error);
                    reject(error);
                  } else {
                    console.log(
                      "Execução com sucesso do update do posto: " + posto.id
                    );
                    resolve();
                  }
                }
              );
            })
              .then(() => {
                return new Promise((resolve, reject) => {
                  db.query(
                    "UPDATE Telefone SET Numero = ?  WHERE Posto_ID = ?;",
                    [telefone.numero, posto.id],
                    (error) => {
                      if (error) {
                        console.log("ERRO AO ALTERAR O NUMERO DO POSTO !");
                        console.log(error);
                        reject(error);
                      } else {
                        resolve();
                      }
                    }
                  );
                });
              })
              .then(() => aceito(Posto_ID))
              .catch((error) => {
                console.log(error);
                rejeitado(error);
              });
          }
        }
      );
    });
  },

  consultar: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
          SELECT * FROM Vacina;
        `,
        (error, results) => {
          if (error) {
            console.log("Erro ao consultar Vacina" + error);
            rejeitado(error);
            return;
          } else {
            aceito(results);
          }
        }
      );
    });
  },

  consultarID: (ID) => {
    if (ID) {
      return new Promise((aceito, rejeitado) => {
        db.query(
          `
          SELECT
          P.ID AS Posto_ID,
          P.Nome AS Nome_do_Posto,
          E.Cep,
          E.Uf,
          E.Localidade,
          E.Bairro,
          E.Logradouro,
          E.Numero,
          T.Numero AS Numero_do_Telefone
        FROM
          Posto AS P
        LEFT JOIN
          Endereco AS E ON P.ID = E.Posto_ID
        LEFT JOIN
          Telefone AS T ON P.ID = T.Posto_ID
        WHERE
          P.ID = ?;        
          `,
          [ID],
          (error, results) => {
            if (error) {
              console.log("Erro Cadastrar Posto" + error);
              rejeitado(error);
              return;
            } else {
              aceito(results);
            }
          }
        );
      });
    } else {
      return new Promise((aceito, rejeitado) => {
        db.query("SELECT * FROM Posto", (error, results) => {
          if (error) {
            console.log("Erro Cadastrar Posto" + error);
            rejeitado(error);
            return;
          } else {
            aceito(results);
          }
        });
      });
    }
  },

  deletar: (id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM Endereco WHERE Posto_ID = ?",
        [id],
        (error, results) => {
          if (error) {
            console.log("Erro DELETAR Endereco" + error);
            rejeitado(error);
            return;
          } else {
            Posto_ID = results.insertId;
          }
        }
      );

      new Promise((resolve, reject) => {
        db.query("DELETE FROM Telefone WHERE Posto_ID = ?", [id], (error) => {
          if (error) {
            console.log("ERRO DELETAR Telefone");
            console.log(error);
            reject(error);
          } else {
            resolve();
          }
        });
      })
        .then(() => {
          new Promise((resolve, reject) => {
            db.query("DELETE FROM Posto WHERE ID = ?", [id], (error) => {
              if (error) {
                console.log("ERRO AO DELETAR POSTO");
                console.log(error);
                reject(error);
              } else {
                resolve();
              }
            });
          });
        })
        .then(() => aceito(Posto_ID))
        .catch((error) => {
          console.log(error);
          rejeitado(error);
        });
    });
  },

  inserir: (vacina) => {
    let ID_Vacina = null;

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO Vacina (Nome) VALUES (?)",
        [vacina],
        (error, results) => {
          if (error) {
            console.log("Erro Cadastrar Vacina" + error);
            rejeitado(error);
            return;
          } else {
            ID_Vacina = results.insertId;
            aceito(ID_Vacina)
          }
        }
      );
    });
  },
};
