const db = require("../db");

module.exports = {
  inserir: (posto, endereco, telefone) => {
    let ID_Endereco = null;
    let ID_Posto = null;

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
            ID_Posto = results.insertId;

            new Promise((resolve, reject) => {
              db.query(
                "INSERT INTO Endereco (Cep, Uf, Localidade, Bairro, Logradouro, Numero) VALUES (?, ?, ?, ?, ?, ?)",
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
                      "Execução com sucesso do insert Endereco: " +
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
                    "INSERT INTO Telefone (Numero, Posto_ID) VALUES (?, ?)",
                    [telefone.numero, ID_Posto],
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
                    "UPDATE Posto SET Endereco_ID = ? WHERE ID = ?",
                    [ID_Endereco, ID_Posto],
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
              .then(() => aceito(ID_Posto))
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
    let postos = null;

    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM Posto", (error, results) => {
        if (error) {
          console.log("Erro Cadastrar Posto" + error);
          rejeitado(error);
          return;
        } else {
          aceito(results)
        }
      });
    })
  },
};
