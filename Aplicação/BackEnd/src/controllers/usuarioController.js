const UsuarioService = require("../services/UsuarioService.js");

module.exports = {
  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let sexo = req.body.sexo;
    let telefone = req.body.telefone;
    let email = req.body.email;
    let senha = req.body.senha;

    let allPropertiesFilled =
      nome &&
      cpf &&
      rg &&
      telefone &&
      sexo &&
      email &&
      senha;

    if (allPropertiesFilled) {
      let usuarioCodigo = await UsuarioService.inserir(
        nome,
        cpf,
        rg,
        sexo,
        email,
        telefone,
        senha
      );
      json.result = {
        codigo: usuarioCodigo,
        nome,
        cpf,
        rg,
        sexo,
        email,
        telefone,
        senha,
      };
      console.log("-----USUARIO REGISTRADO COM SUCESSO !-------")
      console.log("|nome: " + nome);
      console.log("|cpf: " + cpf);
      console.log("|rg: " + rg);
      console.log("|sexo: " + sexo);
      console.log("|email: " + email);
      console.log("|telefone: " + telefone);
      console.log("|senha: " + senha);
      console.log("--------------------------------------------");
    } else {
      json.error = "Campos não Enviados";
    }
    res.json(json);
  },
};
