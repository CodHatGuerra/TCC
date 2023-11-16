const db = require("../db");

module.exports = {
  alterar: (carteira) => {
    console.log(carteira);
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
          UPDATE
            Usuario_tem_Vacina
          SET
            Dose_01 = ?, Dose_02 = ?, Dose_03 = ?
          WHERE
            Usuario_ID = ?
          AND
            Vacina_ID = ?;  
        `,
        [carteira.Dose_01, carteira.Dose_02, carteira.Dose_03, carteira.Usuario_ID, carteira.Vacina_ID],
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
  consultarID: (ID) => {
    if (ID) {
      return new Promise((aceito, rejeitado) => {
        db.query(
          `
            SELECT 
               V.ID 
              AS 
                Vacina_ID,
                V.Nome
              AS 
                Nome_Vacina,
                Dose_01
              AS
                Dose_01,
                Dose_02
              AS
                Dose_02,
                Dose_03
              AS
                Dose_03        
            FROM 
              Usuario_tem_Vacina UV
            JOIN 
              Vacina V ON UV.Vacina_ID = V.ID
            WHERE
               UV.Usuario_ID = ?; 
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
  deletar: (ID_Carteira, ID_Vacina) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
          DELETE FROM 
            Usuario_tem_Vacina
          WHERE 
            Usuario_ID = ? AND Vacina_ID = ?;

        `,
        [ID_Carteira, ID_Vacina],
        (error, results) => {
          if (error) {
            console.log("Erro DELETAR VINCULO VACINA USUARIO" + error);
            rejeitado(error);
            return;
          } else {
            Vacina = results.insertId;
            aceito(Vacina);
          }
        }
      );
    });
  },
  inserir: (carteira) => {
    let ID_Vinculo = null;

    console.log(carteira);

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO Usuario_tem_Vacina (Usuario_ID, Vacina_ID, Dose_01, Dose_02, Dose_03) VALUES (?, ?, ?, ?, ?)",
        [
          carteira.Usuario_ID,
          carteira.Vacina_ID,
          carteira.Dose_01,
          carteira.Dose_02,
          carteira.Dose_03,
        ],
        (error, results) => {
          if (error) {
            console.log("Erro ao Vincular Vacina na carteira" + error);
            rejeitado(error);
            return;
          } else {
            ID_Vinculo = results.insertId;
            aceito(ID_Vinculo);
          }
        }
      );
    });
  },
};
