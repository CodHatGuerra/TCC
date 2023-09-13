const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const TesteController = require("../controllers/testeController");

const UsuarioController = require("../controllers/usuarioController");
const LoginController = require("../controllers/loginController");
const PostoController = require("../controllers/postoController");
const FuncionarioController = require("../controllers/FuncionarioController");


// ROTAS USUARIO
// CADASTRAR USUARIO
router.post("/usuario", UsuarioController.cadastrar);


// ROTA LOGIN
// LOGAR
router.post("/login", LoginController.login);


//ROTAS POSTO
// CADASTRAR POSTO
router.post("/posto", authMiddleware, PostoController.cadastrar);
// CONSULTAR UM POSTO
router.get("/posto/:id", authMiddleware, PostoController.consultarID);
// CONSULTAR TODOS OS POSTOS
router.get("/posto", authMiddleware, PostoController.consultar);
// DELETAR POSTO
router.delete("/posto", authMiddleware, PostoController.deletar);
// EDITAR POSTO
router.patch("/posto", authMiddleware, PostoController.alterar);


//ROTAS FUNCIONARIO
router.post("/funcionario", FuncionarioController.cadastrar);




// Rota protegida que requer autenticação
router.get("/teste", authMiddleware, TesteController.teste);
module.exports = router;
