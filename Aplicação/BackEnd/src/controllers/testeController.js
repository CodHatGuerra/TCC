module.exports = {
  teste: async (req, res) => {
    let json = { error: "", result: {} };
    let cpf = req.body.cpf;
    let senha = req.body.senha;

    req.session.cpf = cpf

    let allPropertiesFilled =
      cpf &&
      senha;
    if (allPropertiesFilled) {
      json.result = {
        cpf: cpf,
        senha: senha,
        session: req.session.id,
        last: req.session.lastSession
      };
    } else {
      json.error = "Campos não Enviados";
    }

    res.json(json);
  },
};
