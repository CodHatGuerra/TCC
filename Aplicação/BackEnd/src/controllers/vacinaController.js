const VacinaService = require("../services/VacinaService.js");

module.exports = {
  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    const vacina = req.body.vacina;

    const vacinaPreenchida = vacina.ID && vacina.Nome;

    if (vacinaPreenchida) {
      await VacinaService.alterar(vacina)
        .then(() => {
          json.result = {
            msg: "Vacina Alterada com Sucesso !",
          };
          console.log("-----Vacina ALTERADa SUCESSO !-------");
          for (let prop in vacina) {
            console.log(`${prop} : ${vacina[prop]}`);
          }
          console.log("--------------------------------------------");
        })
        .catch((error) => {
          console.log("Erro na requisição para o Banco ! " + error);
          json.error = {
            msg: "Erro na requisição para o banco !",
            error: error.sqlMessage,
          };
        });
    } else {
      json.error = "Objeto e propriedades não correspondem ao esperado.";
    }
    res.json(json);
  },
  cadastrar: async (req, res) => {
    let json = { error: "", result: {} };

    const Vacina = req.body;

    verificaVacina = Vacina.nome;

    if (verificaVacina) {
      await VacinaService.inserir(Vacina)
        .then((resultado) => {
          json.result = {
            msg: "Cadastrado com Sucesso !",
          };
          console.log("-----VACINA REGISTRADA COM SUCESSO !-------");
          console.log("ID : " + resultado);
          console.log(`Nome Vacina : ${Vacina.Nome}`);
          console.log("--------------------------------------------");
        })
        .catch((error) => {
          console.log("Erro na requisição para o Banco ! " + error);
          json.error = {
            msg: "Erro na requisição para o banco !",
            error: error.sqlMessage,
          };
        });
    } else {
      json.error = "Objeto e propriedades não correspondem ao esperado.";
    }
    res.json(json);
  },
  consultar: async (req, res) => {
    let json = { error: "", result: {} };

    await VacinaService.consultar()
      .then((resultado) => {
        json.result = {
          Vacinas: resultado,
        };
        console.log("-----PESQUISA REALIZADA COM SUCESSO !-------");
      })
      .catch((error) => {
        console.log("Erro na requisição para o Banco ! " + error);
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });

    res.json(json);
  },
  consultarID: async (req, res) => {
    let json = { error: "", result: {} };

    let ID = req.params.id;

    await VacinaService.consultarID(ID)
      .then((resultado) => {
        json.result = {
          postos: resultado,
        };
        console.log("-----PESQUISA REALIZADA COM SUCESSO !-------");
      })
      .catch((error) => {
        console.log("Erro na requisição para o Banco ! " + error);
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });

    res.json(json);
  },
  deletar: async (req, res) => {
    let json = { error: "", result: {} };

    const id = req.params.id;

    await VacinaService.deletar(id)
      .then(() => {
        console.log("-----Vacina DELETADA COM SUCESSO ! !-------");
        console.log("ID Vacina DELETADA: " + id);
      })
      .catch((error) => {
        console.log(
          "Erro na requisição para o Banco !  ROTA DELETE Vacina" + error
        );
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });
    res.json(json);
  },
};
