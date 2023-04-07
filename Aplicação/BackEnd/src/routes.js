const express = require("express");
const router = express.Router();

const UsuarioController = require("./controllers/usuarioController");
const LoginController = require("./controllers/loginController");

router.post("/usuario", UsuarioController.inserir);
router.post("/login", LoginController.login);

module.exports = router;
