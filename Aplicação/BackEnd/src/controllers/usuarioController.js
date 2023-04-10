const UsuarioService = require("../services/UsuarioService.js");

module.exports = {
  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let rg = req.body.rg;
    let sexo = req.body.sexo;
    let data_nascimento = req.body.data_nascimento;
    let estado_civil = req.body.estado_civil;
    let email = req.body.email;
    let numero = req.body.numero;
    let nacionalidade = req.body.nacionalidade;
    let rua = req.body.rua;
    let bairro = req.body.bairro;
    let estado = req.body.estado;
    let cep = req.body.cep;
    let senha = req.body.cep;

    let allPropertiesFilled =
      nome &&
      cpf &&
      rg &&
      sexo &&
      data_nascimento &&
      estado_civil &&
      email &&
      numero &&
      nacionalidade &&
      rua &&
      bairro &&
      estado &&
      cep &&
      senha;

    if (allPropertiesFilled) {
      let usuarioCodigo = await UsuarioService.inserir(
        nome,
        cpf,
        rg,
        sexo,
        data_nascimento,
        estado_civil,
        email,
        numero,
        nacionalidade,
        rua,
        bairro,
        estado,
        cep,
        senha
      );
      json.result = {
        codigo: usuarioCodigo,
        nome,
        cpf,
        rg,
        sexo,
        data_nascimento,
        estado_civil,
        email,
        numero,
        nacionalidade,
        rua,
        bairro,
        estado,
        cep,
        senha,
      };
      console.log("-----USUARIO REGISTRADO COM SUCESSO !-------")
      console.log("|nome: " + nome);
      console.log("|cpf: " + cpf);
      console.log("|rg: " + rg);
      console.log("|sexo: " + sexo);
      console.log("|data_nascimento: " + data_nascimento);
      console.log("|estado_civil: " + estado_civil);
      console.log("|email: " + email);
      console.log("|numero: " + numero);
      console.log("|nacionalidade: " + nacionalidade);
      console.log("|rua: " + rua);
      console.log("|bairro: " + bairro);
      console.log("|estado: " + estado);
      console.log("|cep: " + cep);
      console.log("|senha: " + senha);
      console.log("--------------------------------------------");
    } else {
      json.error = "Campos não Enviados";
    }
    res.json(json);
  },
};
