const jwt = require('jsonwebtoken');

function gerarToken(usuario) {
  const payload = {
    id: usuario.id,
    email: usuario.email,
    // Outras informações relevantes do usuário...
  };

  const chaveSecreta = 'sua-chave-secreta-aqui';
  const token = jwt.sign(payload, chaveSecreta, { expiresIn: '1h' });
  return token;
}

function verificarToken(token) {
  try {
    const chaveSecreta = 'sua-chave-secreta-aqui';
    const decoded = jwt.verify(token, chaveSecreta);
    return decoded;
  } catch (error) {
    throw new Error('Token inválido');
  }
}

module.exports = {
  gerarToken,
  verificarToken,
};
