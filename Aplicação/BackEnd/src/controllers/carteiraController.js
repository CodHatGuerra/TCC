const CarteiraService = require("../services/CarteiraService.js");

module.exports = {
  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    const CarteiraUsuario = req.body.carteiraUsuario;

    const CarteiraUsuarioPreenchida =
      CarteiraUsuario.Usuario_ID && CarteiraUsuario.Vacina_ID && CarteiraUsuario.Funcionario && CarteiraUsuario.Validade;

    if (CarteiraUsuarioPreenchida) {
      await CarteiraService.alterar(CarteiraUsuario)
        .then(() => {
          json.result = {
            msg: "Vacina Alterada com Sucesso !",
          };
          console.log("-----Carteira de Vacina ALTERADA Com SUCESSO !-------");
          for (let prop in CarteiraUsuario) {
            console.log(`${prop} : ${CarteiraUsuario[prop]}`);
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

    const CarteiraUsuario = req.body.carteiraUsuario;

    const CarteiraUsuarioPreenchida =
      CarteiraUsuario.Usuario_ID && CarteiraUsuario.Vacina_ID && CarteiraUsuario.Funcionario && CarteiraUsuario.Validade;

    if (CarteiraUsuarioPreenchida) {
      await CarteiraService.inserir(CarteiraUsuario)
        .then((result) => {
          json.result = {
            msg: "Cadastrado com Sucesso !",
          };
          console.log(
            "-----Cadastro em CARTEIRA REGISTRADo COM SUCESSO !-------"
          );
          console.log("ID :  VACINA " + CarteiraUsuario.Vacina_ID);
          console.log(`ID CARTEIRA: ${CarteiraUsuario.Usuario_ID}`);
          console.log(`DOSE 1: ${CarteiraUsuario.Dose_01}`);
          console.log(`DOSE 2:  ${CarteiraUsuario.Dose_02}`);
          console.log(`DOSE 3:  ${CarteiraUsuario.Dose_03}`);
          console.log(`ID DE REGISTRO DA COMBINAÇÃO: ` + result);
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
  consultarCPF: async (req, res) => {
    let json = { error: "", result: {} };

    let cpf = req.params.cpf;

    await CarteiraService.consultarCPF(cpf)
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

    let ID_Carteira = req.params.IDCarteira;
    let ID_Vacina = req.params.IDVacina;

    await CarteiraService.consultarID(ID_Carteira, ID_Vacina)
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
  deletar: async (req, res) => {
    let json = { error: "", result: {} };

    const ID_Carteira = req.params.idcarteira;
    const ID_Vacina = req.params.idvacina;

    await CarteiraService.deletar(ID_Carteira, ID_Vacina)
      .then(() => {
        console.log("-----Vacina DELETADA COM SUCESSO ! !-------");
        console.log("ID Carteira : " + ID_Carteira);
        console.log("ID Vacina : " + ID_Vacina);
      })
      .catch((error) => {
        console.log(
          "Erro na requisição para o Banco !  ROTA DELETE Vacina Vinculada" +
            error
        );
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });
    res.json(json);
  },
};
