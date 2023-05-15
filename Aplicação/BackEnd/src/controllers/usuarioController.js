const UsuarioService = require("../services/UsuarioService.js");

module.exports = {
  cadastrar: async (req, res) => {
    let json = { error: "", result: {} };

    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let sexo = req.body.sexo;
    let nascimento = req.body.nascimento;
    //let telefone = req.body.telefone;
    let email = req.body.email;
    let senha = req.body.senha;
    let data_Criada = req.body.data_Criada;

    let allPropertiesFilled =
      nome &&
      cpf &&
      rg &&
      nascimento &&
      //telefone &&
      sexo &&
      email &&
      data_Criada &&
      senha;

    if (allPropertiesFilled) {
      let usuarioCodigo = await UsuarioService.inserir(
        nome,
        cpf,
        rg,
        sexo,
        senha,
        nascimento,
        email,
        data_Criada
      );
      json.result = {
        codigo: usuarioCodigo,
        nome,
        cpf,
        rg,
        sexo,
        nascimento,
        email,
        senha,
      };
      console.log("-----USUARIO REGISTRADO COM SUCESSO !-------");
      console.log("|nome: " + nome);
      console.log("|cpf: " + cpf);
      console.log("|rg: " + rg);
      console.log("|sexo: " + sexo);
      console.log("|email: " + email);
      console.log("|senha: " + senha);
      console.log("--------------------------------------------");
    } else {
      json.error = "Campos não Enviados";
    }
    res.json(json);
  },
};
