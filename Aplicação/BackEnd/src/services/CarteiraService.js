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
            Dose_01 = ?, Dose_02 = ?, Dose_03 = ?, Idade = ?, Funcionario = ?
          WHERE
            Usuario_ID = ?
          AND
            Vacina_ID = ?;  
        `,
        [
          carteira.Dose_01,
          carteira.Dose_02,
          carteira.Dose_03,
          carteira.Idade,
          carteira.Funcionario,
          carteira.Usuario_ID,
          carteira.Vacina_ID,
        ],
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
  consultarCPF: (CPF) => {
    if (CPF) {
      return new Promise((aceito, rejeitado) => {
        db.query(
          `
          SELECT
            UV.Usuario_ID,
            UV.Vacina_ID,
            V.Nome AS NomeVacina,
            UV.Dose_01,
            UV.Dose_02,
            UV.Dose_03,
            UV.Idade,
            UV.Funcionario
          FROM
            Usuario_tem_Vacina UV
          JOIN
            Vacina V ON UV.Vacina_ID = V.ID
          JOIN
            Usuario U ON UV.Usuario_ID = U.ID
          WHERE
            U.Cpf = ?;
          `,
          [CPF],
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
  consultarID: (ID_Carteira, ID_Vacina) => {
    if (true) {
      return new Promise((aceito, rejeitado) => {
        db.query(
          `
          SELECT
          UTV.Usuario_ID,
          UTV.Vacina_ID,
          V.Nome AS Nome_Vacina,
          UTV.Dose_01,
          UTV.Dose_02,
          UTV.Dose_03,
          UTV.Idade,
          UTV.Funcionario
          FROM
              Usuario_tem_Vacina UTV
          JOIN
              Vacina V ON UTV.Vacina_ID = V.ID
          WHERE
            UTV.Usuario_ID = ?
            AND UTV.Vacina_ID = ?;
          `,
          [ID_Carteira, ID_Vacina],
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
        "INSERT INTO Usuario_tem_Vacina (Usuario_ID, Vacina_ID, Dose_01, Dose_02, Dose_03, Idade, Funcionario) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          carteira.Usuario_ID,
          carteira.Vacina_ID,
          carteira.Dose_01,
          carteira.Dose_02,
          carteira.Dose_03,
          carteira.Idade,
          carteira.Funcionario
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
