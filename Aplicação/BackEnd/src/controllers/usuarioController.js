const UsuarioService = require("../services/UsuarioService.js");

module.exports = {
  cadastrar: async (req, res) => {
    let json = { error: "", result: {} };

    console.log(req.body);

    const usuario = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      rg: req.body.rg,
      sexo: req.body.sexo,
      data_Nascimento: req.body.data_Nascimento,
      email: req.body.email,
      senha: req.body.senha,
      data_Criada: req.body.data_Criada,
      telefone: req.body.telefone,
    };

    const endereco = {
      cep: req.boy.cep,
      uf: req.boy.uf,
      localidade: req.boy.localidade,
      bairro: req.boy.bairro,
      logradouro: req.boy.logradouro,
      numero: req.boy.numero,
    };

    const usuarioPreenchido =
      usuario.nome &&
      usuario.cpf &&
      usuario.rg &&
      usuario.data_Nascimento &&
      usuario.sexo &&
      usuario.email &&
      usuario.data_Criada &&
      usuario.senha &&
      usuario.telefone;

    const enderecoPreenchido =
      endereco.cep &&
      endereco.uf &&
      endereco.localidade &&
      endereco.bairro &&
      endereco.logradouro &&
      endereco.numero;

    if (usuarioPreenchido) {
      await UsuarioService.inserir(usuario)
        .then((resultado) => {
          json.result = {
            codigo: resultado.usuarioCodigo,
            nome: usuario.nome,
            cpf: usuario.cpf,
            rg: usuario.rg,
            data_Nascimento: usuario.data_Nascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            data_Criada: usuario.data_Criada,
            telefone: telefone,
          };
          console.log("-----USUARIO REGISTRADO COM SUCESSO !-------");
          for (let prop in usuario) {
            console.log(`${prop} : ${usuario[prop]}`);
          }
          console.log("--------------------------------------------");
        })
        .catch((error) => {
          json.error = {
            msg: "Erro na requisição para o banco !",
            error: error.sqlMessage,
          };
        });
    } else {
      json.error = "Campos não Enviados";
    }
    res.json(json);
  },
};
