const LoginService = require("../services/LoginService.js");

module.exports = {
  login: async (req, res) => {
    let json = { error: "", result: {} };

    const { cpf, senha } = req.body;

    if (cpf && senha) {
      let usuarioResposta = await LoginService.login(cpf, senha);
      json.result = {
        resposta: usuarioResposta,
      };
      console.log(`Usuario: ${usuarioResposta[0].nome} CPF: ${usuarioResposta[0].cpf} Logado com Sucesso !`);
    } else {
      json.error = "Usuário e senha são obrigatórios.";
      console.log(
        "Tentativa de Login: Login Negado, Usuario ou Senha Incorreto."
      );
    }
    res.json(json);
  },
};
