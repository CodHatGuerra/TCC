module.exports = {
  teste: async (req, res) => {
    let json = { error: "", result: {} };
    let cpf = req.body.cpf;
    let senha = req.body.senha;

     if (req.session.isLoggedIn) {
        let allPropertiesFilled =
          cpf &&
          senha;
        if (allPropertiesFilled) {
          json.result = {
            msg: "Usuario logado e autenticado com sucesso !"
          };
          console.log("Requisição permitida");
        } else {
          json.error = "Campos não Enviados";
        }
        res.json(json);
    }  else {
      // Usuário não está logado ou sessão inválida
      json.error = "Usuário não está logado";
      console.log("Usuario não esta logado.");
      res.json(json)
    }
  },
};
