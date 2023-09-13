const jwtService = require("../utils/jwtService");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  try {
    const decodedToken = jwtService.verificarToken(token);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido." });
  }
}

module.exports = authMiddleware;
