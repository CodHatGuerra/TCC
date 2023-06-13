const UsuarioService = require("../services/UsuarioService.js");
const jwtService = require("../utils/jwtService.js");

module.exports = {
  cadastrar: async (req, res) => {
    let json = { error: "", result: {} };
    const usuario = req.body.usuario;
    const endereco = req.body.endereco;
    const telefone = req.body.telefone;

    const usuarioPreenchido =
      usuario.nome &&
      usuario.cpf &&
      usuario.rg &&
      usuario.data_Nascimento &&
      usuario.sexo &&
      usuario.email &&
      usuario.data_Criada &&
      usuario.senha;

    const enderecoPreenchido =
      endereco.cep &&
      endereco.uf &&
      endereco.localidade &&
      endereco.bairro &&
      endereco.logradouro &&
      endereco.numero;

    const telefonePreenchido = telefone.numero;

    if (usuarioPreenchido && enderecoPreenchido && telefonePreenchido) {
      await UsuarioService.inserir(usuario, endereco, telefone)
        .then((resultado) => {
          json.result = {
            codigo: resultado,
            nome: usuario.nome,
            cpf: usuario.cpf,
            rg: usuario.rg,
            data_Nascimento: usuario.data_Nascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            data_Criada: usuario.data_Criada,
            token: jwtService.gerarToken(usuario.nome, usuario.cpf),
          };
          console.log("-----USUARIO REGISTRADO COM SUCESSO !-------");
          console.log("ID : " + resultado);
          for (let prop in usuario) {
            console.log(`${prop} : ${usuario[prop]}`);
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
};
