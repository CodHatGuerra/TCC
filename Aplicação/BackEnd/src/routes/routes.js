const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const TesteController = require("../controllers/testeController");

const UsuarioController = require("../controllers/usuarioController");
const LoginController = require("../controllers/loginController");
const PostoController = require("../controllers/postoController");






// ROTAS USUARIO - CADASTRO / EDIT/ DELET
router.post("/cadastrar", UsuarioController.cadastrar);


// ROTA LOGIN
router.post("/login", LoginController.login);


//ROTAS CADASTRO POSTO
router.post("/posto", PostoController.cadastrar);
// CONSULTAR TODOS OS POSTOS
router.get("/posto", PostoController.consultar);



// Rota protegida que requer autenticação
router.get("/teste", authMiddleware, TesteController.teste);
module.exports = router;
