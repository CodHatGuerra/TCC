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
    } else {
      json.error = "Usuário e senha são obrigatórios.";
    }
    res.json(json);
  },
};
