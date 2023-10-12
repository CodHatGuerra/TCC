const UsuarioService = require("../services/UsuarioService.js");

module.exports = {

  alterar: async (req, res) => {
    let json = { error: "", result: {} };
    const usuario = req.body.usuario;
    const telefone = req.body.telefone;
    const id = req.params.id;

    const usuarioPreenchido =
      usuario.nome &&
      usuario.cpf &&
      usuario.rg &&
      usuario.data_Nascimento &&
      usuario.sexo &&
      usuario.email &&
      usuario.data_Criada &&
      usuario.senha;

    const telefonePreenchido = telefone.numero;

    if (usuarioPreenchido && telefonePreenchido && id) {
      await UsuarioService.alterar(usuario, telefone, id)
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
          };
          console.log("-----USUARIO ALTERADO COM SUCESSO !-------");
          console.log("NOME:  : " + usuario.nome);
          console.log("CPF:  : " + usuario.cpf);
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
    const usuario = req.body.usuario;
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

    const telefonePreenchido = telefone.numero;

    if (usuarioPreenchido && telefonePreenchido) {
      await UsuarioService.inserir(usuario,telefone)
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
          };
          console.log("-----USUARIO REGISTRADO COM SUCESSO !-------");
          console.log("ID : " + resultado);
          for (let prop in usuario) {
            console.log(`${prop} : ${usuario[prop]}`);
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

    await UsuarioService.consultar()
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

    await UsuarioService.consultarID(ID)
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
  consultarCPF: async (req, res) => {
    let json = { error: "", result: {} };

    let CPF = req.params.cpf;

    await UsuarioService.consultarCPF(CPF)
      .then((resultado) => {
        json.result = {
          Usuario: resultado,
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

    await UsuarioService.deletar(id)
      .then(() => {
        console.log("-----USUARIO DELETADO COM SUCESSO ! !-------");
        console.log("ID USUARIO DELETADO: " + id);
      })
      .catch((error) => {
        console.log(
          "Erro na requisição para o Banco !  ROTA DELETE USUARIO" + error
        );
        json.error = {
          msg: "Erro na requisição para o banco !",
          error: error.sqlMessage,
        };
      });
    res.json(json);
  },
};
