const PostoService = require("../services/PostoService.js");
const jwtService = require("../utils/jwtService.js");

module.exports = {
  cadastrar: async (req, res) => {
    let json = { error: "", result: {} };

    const posto = req.body.posto;
    const endereco = req.body.endereco;
    const celular = req.body.celular;

    const postoPreenchido = posto.nome;

    const enderecoPreenchido =
      endereco.cep &&
      endereco.uf &&
      endereco.localidade &&
      endereco.bairro &&
      endereco.logradouro &&
      endereco.numero;

    const celularPreenchido = celular.numero;

    if (postoPreenchido && enderecoPreenchido && celularPreenchido) {
      await PostoService.inserir(posto, endereco, celular)
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
          for (let prop in celular) {
            console.log(`${prop} : ${celular[prop]}`);
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
 
    if (true) {
      await PostoService.consultar()
        .then((resultado) => {
          json.result = {
            postos: resultado
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
    }
    res.json(json);
  },
};
