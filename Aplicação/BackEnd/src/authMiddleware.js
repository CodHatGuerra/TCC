const jwt = require('jsonwebtoken');
const jwtService = require('./jwtService');

module.exports = (req, res, next) => {
  // Verifica se o token está presente no cabeçalho da solicitação
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  try {
    // Verifica a autenticidade do token
    const decodedToken = jwt.verify(token, jwtService.getSecretKey());
    req.userData = decodedToken; // Armazena os dados do usuário no objeto de solicitação para uso posterior
    next(); // Permite que a solicitação continue para a próxima função de middleware ou rota
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};
