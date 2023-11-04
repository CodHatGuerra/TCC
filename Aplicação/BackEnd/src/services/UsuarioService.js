const db = require("../db");

module.exports = {
  alterar: (usuario, telefone, id) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE Usuario SET Nome = ?, Cpf = ?, Sexo = ?, Data_Nascimento = ?, Email = ?, Senha = ?, Imagem = ? WHERE ID = ?",
        [
          usuario.nome,
          usuario.cpf,
          usuario.sexo,
          usuario.data_Nascimento,
          usuario.email,
          usuario.senha,
          usuario.imagem,
          id,
        ],
        (error, results) => {
          if (error) {
            console.log("Erro ao Alterar Usuario" + error);
            rejeitado(error);
            return;
          } else {
            return new Promise((resolve, reject) => {
              db.query(
                "UPDATE Telefone SET Numero = ? WHERE Usuario_ID = ?",
                [telefone.numero, id],
                (error) => {
                  if (error) {
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
  consultar: () => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        `
          SELECT * FROM Usuario;
        `,
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
    if (ID) {
      return new Promise((aceito, rejeitado) => {
        db.query(
          `
        SELECT U.*,
          T.Numero AS Numero_do_Telefone
        FROM Usuario AS U
          LEFT JOIN Telefone AS T ON U.ID = T.Usuario_ID
        WHERE 
          U.ID = ?;
          `,
          [ID],
          (error, results) => {
            if (error) {
              console.log("Erro Ao Consultar FUNCIONARIO" + error);
              rejeitado(error);
              return;
            } else {
              aceito(results);
            }
          }
        );
      });
    } else {
      if (error) {
        console.log("Erro Cadastrar Posto" + error);
        rejeitado(error);
        return;
      }
    }
  },
  consultarCPF: (CPF) => {
    if (CPF) {
      return new Promise((aceito, rejeitado) => {
        db.query(
          `
          SELECT * FROM Usuario WHERE CPF = ? LIMIT 1;
          `,
          [CPF],
          (error, results) => {
            if (error) {
              console.log("Erro ao consultar Usuario" + error);
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
        "DELETE FROM Telefone WHERE Usuario_ID = ?",
        [id],
        (error, results) => {
          if (error) {
            console.log("Erro DELETAR Endereco do usuario" + error);
            rejeitado(error);
            return;
          } else {
            new Promise((resolve, reject) => {
              db.query(
                "DELETE FROM Funcionario WHERE Usuario_ID = ?",
                [id],
                (error) => {
                  if (error) {
                    console.log("ERRO AO DELETAR Usuario");
                    console.log(error);
                    reject(error);
                  } else {
                    resolve();
                  }
                }
              );
            })
              .then(() => {
                new Promise((resolve, reject) => {
                  db.query(
                    "DELETE FROM Carteira_tem_Vacina WHERE Carteira_ID IN (SELECT ID FROM Carteira WHERE Usuario_ID = ?);",
                    [id],
                    (error) => {
                      if (error) {
                        console.log("ERRO AO DELETAR Usuario");
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
                new Promise((resolve, reject) => {
                  db.query(
                    "DELETE FROM Usuario WHERE ID = ?",
                    [id],
                    (error) => {
                      if (error) {
                        console.log("ERRO AO DELETAR Funcionario");
                        console.log(error);
                        reject(error);
                      } else {
                        resolve();
                      }
                    }
                  );
                });
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
  inserir: (usuario, telefone) => {
    let ID_Usuario = null;

    return new Promise((aceito, rejeitado) => {
      db.query(
        "INSERT INTO Usuario (Nome, Cpf, Sexo, Data_Nascimento, Email, Senha, Data_Criada, Imagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          usuario.nome,
          usuario.cpf,
          usuario.sexo,
          usuario.data_Nascimento,
          usuario.email,
          usuario.senha,
          usuario.data_Criada,
          usuario.imagem,
        ],
        (error, results) => {
          if (error) {
            console.log("Erro Cadastro Usuario" + error);
            rejeitado(error);
            return;
          } else {
            ID_Usuario = results.insertId;

            return new Promise((resolve, reject) => {
              db.query(
                "INSERT INTO Telefone (Numero, Usuario_ID) VALUES (?, ?)",
                [telefone.numero, ID_Usuario],
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
