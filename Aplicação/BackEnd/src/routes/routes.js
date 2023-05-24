const express = require("express");
const router = express.Router();

const UsuarioController = require("../controllers/usuarioController");
const LoginController = require("../controllers/loginController");
const TesteController = require("../controllers/testeController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/cadastrar", UsuarioController.cadastrar);
router.post("/login", LoginController.login);

// Rota protegida que requer autenticação
router.get("/teste", authMiddleware, TesteController.teste);
module.exports = router;
