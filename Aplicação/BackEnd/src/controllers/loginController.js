const LoginService = require("../services/LoginService.js");
const jwtService = require("../utils/jwtService.js");

module.exports = {
  login: async (req, res) => {
    let json = { error: "", result: {} };

    const { cpf, senha } = req.body;

    req.session.isLoggedIn = true;

    if (cpf && senha) {
      let usuarioResposta = await LoginService.login(cpf, senha);
      json.result = {
        resposta: usuarioResposta,
        autenticado: usuarioResposta.autenticado,
        token: jwtService.gerarToken({
          id: usuarioResposta.insertId,
          email: usuarioResposta.Email,
        }),
      };

      if (usuarioResposta.autenticado) {
        console.log(
          `Usuario: ${usuarioResposta[0].Nome} CPF: ${usuarioResposta[0].Cpf} Logado com Sucesso !`
        );
      } else {
        console.log("Tentativa de Login com informações incorretas.");
      }
    } else {
      json.error = "Usuário e senha são obrigatórios.";
      console.log(
        "Tentativa de Login: Login Negado, Usuario ou Senha Incorreto."
      );
    }
    res.json(json);
    console.log(req.session.id);
  },
};
