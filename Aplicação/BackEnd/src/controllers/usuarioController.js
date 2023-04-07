const CarroService = require("../services/CarroService.js");

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
 
    let allPropertiesFilled = nome && cpf && rg && sexo && data_nascimento && estado_civil && email && numero && nacionalidade && rua && bairro && estado && cep;

    if (allPropertiesFilled) {
      let usuarioCodigo = await UsuarioService.inserir(nome, cpf, rg, sexo, data_nascimento, estado_civil, email, numero, nacionalidade, rua, bairro, estado, cep);
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
        cep
      };
    } else {
      json.error = 'Campos não Enviados'
    }
    res.json(json);
  },




};
