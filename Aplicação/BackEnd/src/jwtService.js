const jwt = require("jsonwebtoken");

function gerarToken(usuario) {
  const payload = {
    id: usuario.id,
    email: usuario.email,
    // Outras informações relevantes do usuário...
  };

  const token = jwt.sign(payload, "chave-secreta", { expiresIn: "1h" });
  return token;
}

module.exports = {
  gerarToken,
};
