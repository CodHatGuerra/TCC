const express = require("express");
const router = express.Router();

const UsuarioController = require("./controllers/usuarioController");
const LoginController = require("./controllers/loginController");
const TesteController = require("./controllers/testeController");

router.post("/cadastrar", UsuarioController.cadastrar);
router.post("/login", LoginController.login);
router.get("/teste", TesteController.teste)
module.exports = router;
