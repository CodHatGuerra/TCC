const db = require("../db");

module.exports = {
  alterar: (funcionario) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
        UPDATE
          Funcionario_tem_Posto
        SET
          Posto_ID = ?
        WHERE
          Funcionario_ID = ?;
        `,
        [funcionario.Posto_ID, funcionario.Usuario_ID],
        (error, results) => {
          if (error) {
            console.log("Erro Alterar Cadastro Funcionario" + error);
            rejeitado(error);
            return;
          } else {
            console.log("Cadastro Alterado com Sucesso !");
            new Promise((resolve, reject) => {
              db.query(
                `
                UPDATE 
                  Funcionario
                SET
                 Cargo = ?
                WHERE
                 ID = ?;
                `,
                [funcionario.Cargo, funcionario.Usuario_ID],
                (error) => {
                  if (error) {
                    console.log("Erro ao Trocar o cargo do funcionario");
                    console.log(error);
                    reject(error);
                  } else {
                    resolve(results);
                  }
                }
              );
            })
              .then(() => aceito())
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
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
        SELECT 
          F.ID AS Funcionario_ID, 
          U.Nome AS Nome_Pessoa, 
          F.Cargo,
          P.Nome AS Nome_Posto
        FROM 
            Funcionario AS F
        INNER JOIN 
            Usuario AS U 
        ON 
            F.Usuario_ID = U.ID
        INNER JOIN 
            Funcionario_tem_Posto AS FP ON F.ID = FP.Funcionario_ID
        INNER JOIN 
            Posto AS P ON FP.Posto_ID = P.ID
        WHERE P.ID = ?;
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
  },
  consultarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
        SELECT
          U.ID AS ID_Usuario,
          F.ID AS ID_Funcionario,
          P.ID AS ID_Posto,
          U.Nome AS Nome_Pessoa,
          F.Cargo AS Cargo,
          P.Nome AS Nome_Posto
        FROM
            Usuario U
        JOIN
            Funcionario F ON U.ID = F.Usuario_ID
        JOIN
            Funcionario_tem_Posto FTP ON F.ID = FTP.Funcionario_ID
        JOIN
            Posto P ON FTP.Posto_ID = P.ID;
        `,
        (error, results) => {
          if (error) {
            console.log("Erro Consultar Usuarios de postos " + error);
            rejeitado(error);
            return;
          } else {
            aceito(results);
          }
        }
      );
    });
  },
  consultarCPF: (CPF) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
          SELECT 
            U.Nome AS Nome_Funcionario, F.ID AS Funcionario_ID, F.Cargo, P.Nome AS Nome_Posto, P.ID AS Posto_ID
          FROM 
            Funcionario AS F
          INNER JOIN 
            Usuario AS U ON F.Usuario_ID = U.ID
          INNER JOIN 
            Funcionario_tem_Posto AS FP ON F.ID = FP.Funcionario_ID
          INNER JOIN 
            Posto AS P ON FP.Posto_ID = P.ID
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
  },
  consultarID: (ID) => {
    return new Promise((aceito, rejeitado) => {

      console.log(ID);
      db.query(
        `
          SELECT 
            U.Nome AS Nome_Funcionario, F.ID AS Funcionario_ID, F.Cargo, P.Nome AS Nome_Posto, P.ID AS Posto_ID
          FROM 
            Funcionario AS F
          INNER JOIN 
            Usuario AS U ON F.Usuario_ID = U.ID
          INNER JOIN 
            Funcionario_tem_Posto AS FP ON F.ID = FP.Funcionario_ID
          INNER JOIN 
            Posto AS P ON FP.Posto_ID = P.ID
          WHERE 
            F.ID = ?;
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
  },

  deletar: (ID) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
        DELETE FROM
          Funcionario_tem_Posto
        WHERE
         Funcionario_ID = ?;
        `,
        [ID],
        (error, results) => {
          if (error) {
            console.log("Erro Ao Deletar Funcionario " + error);
            rejeitado(error);
            return;
          } else {
            new Promise((resolve, reject) => {
              db.query(
                `
                DELETE FROM 
                  Funcionario
                WHERE
                 ID = ?;
                `,
                [ID],
                (error) => {
                  if (error) {
                    console.log(
                      "Erro ao deletar da tabela Funcionario_tem_Posto INEXISTENTE"
                    );
                    console.log(error);
                    reject(error);
                  } else {
                    resolve(results);
                  }
                }
              );
            })
              .then(() => aceito())
              .catch((error) => {
                console.log(error);
                rejeitado(error);
              });
          }
        }
      );
    });
  },

  inserir: (funcionario) => {
    let ID_Funcionario = null;

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO Funcionario(Data_Inicio, Usuario_ID, Cargo) VALUES (?, ?, ?)",
        [funcionario.Data_Inicio, funcionario.Usuario_ID, funcionario.Cargo],
        (error, result) => {
          if (error) {
            console.log("ERRO INFORMAÇÕES FUNCIONARIO");
            console.log(error);
            rejeitado(error);
          } else {
            ID_Funcionario = result.insertId;
            console.log(
              "Execução com sucesso do insert Funcionario: " + ID_Funcionario
            );
            new Promise((resolve, reject) => {
              db.query(
                "INSERT INTO Funcionario_tem_Posto (Funcionario_ID, Posto_ID) VALUES (?, ?)",
                [ID_Funcionario, funcionario.Posto_ID],
                (error) => {
                  if (error) {
                    console.log("ID DO POSTO INEXISTENTE");
                    console.log(error);
                    reject(error);
                  } else {
                    resolve();
                  }
                }
              );
            })
              .then(() => aceito())
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
