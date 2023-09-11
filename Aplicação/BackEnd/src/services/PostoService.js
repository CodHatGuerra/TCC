const db = require("../db");

module.exports = {
  alterar: (posto, endereco, telefone) => {
    let ID_Endereco = null;
    let Posto_ID = null;

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO Posto (Nome) VALUES (?)",
        [posto.nome],
        (error, results) => {
          if (error) {
            console.log("Erro Cadastrar Posto" + error);
            rejeitado(error);
            return;
          } else {
            Posto_ID = results.insertId;

            new Promise((resolve, reject) => {
              db.query(
                "INSERT INTO Endereco (Cep, Uf, Localidade, Bairro, Logradouro, Numero, Posto_ID) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [
                  endereco.cep,
                  endereco.uf,
                  endereco.localidade,
                  endereco.bairro,
                  endereco.logradouro,
                  endereco.numero,
                  Posto_ID,
                ],
                (error, result) => {
                  if (error) {
                    console.log("ERRO ENDEREÇO");
                    console.log(error);
                    reject(error);
                  } else {
                    ID_Endereco = result.insertId;
                    console.log(
                      "Execução com sucesso do insert Endereco: " + ID_Endereco
                    );
                    resolve();
                  }
                }
              );
            })
              .then(() => {
                return new Promise((resolve, reject) => {
                  db.query(
                    "INSERT INTO Telefone (Numero, Posto_ID) VALUES (?, ?)",
                    [telefone.numero, Posto_ID],
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

  consultar: (ID) => {
    let postos = null;
    if (id) {
      return new Promise((aceito, rejeitado) => {
        db.query("SELECT * FROM Posto WHERE id = ?",[ID],(error, results) => {
          if (error) {
            console.log("Erro Cadastrar Posto" + error);
            rejeitado(error);
            return;
          } else {
            aceito(results);
          }
        });
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
        "INSERT INTO Posto (Nome) VALUES (?)",
        [posto.nome],
        (error, results) => {
          if (error) {
            console.log("Erro Cadastrar Posto" + error);
            rejeitado(error);
            return;
          } else {
            Posto_ID = results.insertId;
          }
        }
      ).catch((error) => {
        console.log(error);
        rejeitado(error);
      });
    });
  },

  inserir: (posto, endereco, telefone) => {
    let ID_Endereco = null;
    let Posto_ID = null;

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO Posto (Nome) VALUES (?)",
        [posto.nome],
        (error, results) => {
          if (error) {
            console.log("Erro Cadastrar Posto" + error);
            rejeitado(error);
            return;
          } else {
            Posto_ID = results.insertId;

            new Promise((resolve, reject) => {
              db.query(
                "INSERT INTO Endereco (Cep, Uf, Localidade, Bairro, Logradouro, Numero, Posto_ID) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [
                  endereco.cep,
                  endereco.uf,
                  endereco.localidade,
                  endereco.bairro,
                  endereco.logradouro,
                  endereco.numero,
                  Posto_ID,
                ],
                (error, result) => {
                  if (error) {
                    console.log("ERRO ENDEREÇO");
                    console.log(error);
                    reject(error);
                  } else {
                    ID_Endereco = result.insertId;
                    console.log(
                      "Execução com sucesso do insert Endereco: " + ID_Endereco
                    );
                    resolve();
                  }
                }
              );
            })
              .then(() => {
                return new Promise((resolve, reject) => {
                  db.query(
                    "INSERT INTO Telefone (Numero, Posto_ID) VALUES (?, ?)",
                    [telefone.numero, Posto_ID],
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
};
