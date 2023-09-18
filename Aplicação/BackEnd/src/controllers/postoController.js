const PostoService = require("../services/PostoService.js");

module.exports = {
  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    const posto = req.body.posto;
    const endereco = req.body.endereco;
    const telefone = req.body.telefone;

    const postoPreenchido = posto.nome && posto.id;

    const enderecoPreenchido =
      endereco.cep &&
      endereco.uf &&
      endereco.localidade &&
      endereco.bairro &&
      endereco.logradouro &&
      endereco.numero;

    const telefonePreenchido = telefone.numero;

    if (postoPreenchido && enderecoPreenchido && telefonePreenchido) {
      await PostoService.inserir(posto, endereco, telefone)
        .then((resultado) => {
          json.result = {
            msg: "Alterado com Sucesso !",
          };
          console.log("-----POSTO ALTERADO SUCESSO !-------");
          console.log("ID : " + resultado);
          for (let prop in posto) {
            console.log(`${prop} : ${posto[prop]}`);
          }
          console.log("--------------------------------------------");
          for (let prop in endereco) {
            console.log(`${prop} : ${endereco[prop]}`);
          }
          console.log("--------------------------------------------");
          for (let prop in telefone) {
            console.log(`${prop} : ${telefone[prop]}`);
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

    const posto = req.body.posto;
    const endereco = req.body.endereco;
    const telefone = req.body.telefone;

    const postoPreenchido = posto.nome;

    const enderecoPreenchido =
      endereco.cep &&
      endereco.uf &&
      endereco.localidade &&
      endereco.bairro &&
      endereco.logradouro &&
      endereco.numero;

    const telefonePreenchido = telefone.numero;

    if (postoPreenchido && enderecoPreenchido && telefonePreenchido) {
      await PostoService.inserir(posto, endereco, telefone)
        .then((resultado) => {
          json.result = {
            msg: "Cadastrado com Sucesso !",
          };
          console.log("-----POSTO REGISTRADO COM SUCESSO !-------");
          console.log("ID : " + resultado);
          for (let prop in posto) {
            console.log(`${prop} : ${posto[prop]}`);
          }
          console.log("--------------------------------------------");
          for (let prop in endereco) {
            console.log(`${prop} : ${endereco[prop]}`);
          }
          console.log("--------------------------------------------");
          for (let prop in telefone) {
            console.log(`${prop} : ${telefone[prop]}`);
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
  consultar: async (req, res) => {
    let json = { error: "", result: {} };

    await PostoService.consultar()
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

    let ID = req.params.id;

    await PostoService.consultarID(ID)
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

    await PostoService.deletar(id)
      .then((resultado) => {
        json.result = {
          postos: resultado,
        };
        console.log("-----POSTO DELETADO COM SUCESSO ! !-------");
      })
      .catch((error) => {
        console.log(
          "Erro na requisição para o Banco !  ROTA DELETE POSTO" + error
        );
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });
    res.json(json);
  },
};
