const db = require("../db");

module.exports = {
  alterar: (vacina) => {
    console.log(vacina);
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE vacina SET nome = ? WHERE ID = ?;",
        [vacina.Nome, vacina.ID],
        (error, results) => {
          if (error) {
            console.log("Erro na alteração de dados da Vacuna" + error);
            rejeitado(error);
            return;
          } else {
            aceito();
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
            SELECT * FROM
              Vacina
            WHERE
              ID = ?;        
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
      db.query("DELETE FROM Vacina WHERE ID = ?", [id], (error, results) => {
        if (error) {
          console.log("Erro DELETAR Vacina" + error);
          rejeitado(error);
          return;
        } else {
          Vacina = results.insertId;
          aceito(Vacina);
        }
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
            aceito(ID_Vacina);
          }
        }
      );
    });
  },
};
