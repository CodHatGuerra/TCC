const FuncionarioService = require("../services/FuncionarioService.js");

module.exports = {
  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    const funcionario = req.body.Funcionario;

    console.log(funcionario);

    const funcionarioPreenchido =
      funcionario.Usuario_ID && funcionario.Posto_ID && funcionario.Cargo;

    if (funcionarioPreenchido) {
      await FuncionarioService.alterar(funcionario)
        .then(() => {
          json.result = {
            msg: "Funcionario Alterado com Sucesso !",
          };
          console.log("-----Funcionario ALTERADO COM SUCESSO !-------");
          console.log("ID FUNCIONARIO : " + funcionario.Usuario_ID);
          console.log("ID POSTO : " + funcionario.Posto_ID);
          console.log("Cargo : " + funcionario.Cargo);
          console.log("------------------------------------------------");
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

    const funcionario = req.body.Funcionario;

    const funcionarioPreenchido =
      funcionario.Data_Inicio &&
      funcionario.Usuario_ID &&
      funcionario.Posto_ID &&
      funcionario.Cargo;

    if (funcionarioPreenchido) {
      await FuncionarioService.inserir(funcionario)
        .then(() => {
          json.result = {
            msg: "Funcionario Cadastrado com Sucesso !",
          };
          console.log("-----Funcionario REGISTRADO COM SUCESSO !-------");
          console.log("ID FUNCIONARIO : " + funcionario.Usuario_ID);
          console.log("ID POSTO : " + funcionario.Posto_ID);
          console.log("------------------------------------------------");
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

    let ID = req.params.id;

    await FuncionarioService.consultar(ID)
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
  consultarID: async (req, res) => {
    let json = { error: "", result: {} };

    let ID = req.params.cpf;

    await FuncionarioService.consultarID(ID)
      .then((resultado) => {
        json.result = {
          funcionario: resultado,
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

    await FuncionarioService.deletar(id)
      .then((resultado) => {
        json.result = {
          delete: resultado,
        };
        console.log("-----FUNCIONARIO DELETADO COM SUCESSO ! !-------");
        console.log("ID: " + id);
      })
      .catch((error) => {
        console.log(
          "Erro na requisição para o Banco !  ROTA DELETE POSTO: " + error
        );
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });
    res.json(json);
  },
};
