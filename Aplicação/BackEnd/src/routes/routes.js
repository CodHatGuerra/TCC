const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const TesteController = require("../controllers/testeController");
const UsuarioController = require("../controllers/usuarioController");
const LoginController = require("../controllers/loginController");
const PostoController = require("../controllers/postoController");
const FuncionarioController = require("../controllers/FuncionarioController");
const VacinaController = require("../controllers/vacinaController")
const CarteiraController = require("../controllers/carteiraController")

// ROTAS USUARIO
//--------------------------------------------------------//
//CADASTRAR USUARIO                                       //
router.post("/usuario", UsuarioController.cadastrar); //
//CONSULTAR USUARIO                                       //
router.get("/usuario/", UsuarioController.consultar); //
//CONSULTAR USUARIO POR ID                                //
router.get("/usuario/:id", UsuarioController.consultarID); //
//CONSULTAR USUARIO POR CPF                                //
router.get("/usuario/cpf/:cpf", UsuarioController.consultarCPF); //
//ALTERAR USUARIO                                         //
router.put("/usuario/:id", UsuarioController.alterar); //
//DELETAR USUARIO                                         //
router.delete("/usuario/:id", UsuarioController.deletar); //
//--------------------------------------------------------//

// ROTA LOGIN
//--------------------------------------------------------//
// LOGAR                                                  //
router.post("/login", LoginController.login); //
//--------------------------------------------------------//

//ROTAS POSTO
//--------------------------------------------------------//
// CADASTRAR POSTO
router.post("/posto", authMiddleware, PostoController.cadastrar);
//CONSULTAR UM POSTO
router.get("/posto/:id", authMiddleware, PostoController.consultarID);
//CONSULTAR TODOS OS POSTOS
router.get("/posto", authMiddleware, PostoController.consultar);
//DELETAR POSTO
router.delete("/posto/:id", authMiddleware, PostoController.deletar);
//EDITAR POSTO
router.put("/posto", authMiddleware, PostoController.alterar);
//--------------------------------------------------------//

//ROTAS FUNCIONARIO
//--------------------------------------------------------//
//CADASTRAR FUNCIONARIO
router.post("/funcionario", authMiddleware, FuncionarioController.cadastrar);
//ALTERAR FUNCIONARIO
router.put("/funcionario", authMiddleware, FuncionarioController.alterar);
//CONSULTAR TODOS FUNCIONARIO DE TODOS OS POSTOS
router.get("/funcionario/",authMiddleware,FuncionarioController.consultarTodos);
//CONSULTAR TODOS FUNCIONARIO DE UM POSTO
router.get("/funcionario/posto/:id",authMiddleware,FuncionarioController.consultar);
//CONSULTAR UM FUNCIONARIO PELO CPF
router.get("/funcionario/cpf/:cpf",authMiddleware,FuncionarioController.consultarCPF);
//CONSULTAR UM FUNCIONARIO PELO ID
router.get("/funcionario/id/:id",authMiddleware,FuncionarioController.consultarID);
//DELETAR FUNCIONARIO PELO ID
router.delete("/funcionario/:id",authMiddleware,FuncionarioController.deletar);
//--------------------------------------------------------//

//ROTAS VACINA
//--------------------------------------------------------//
// CADASTRAR VACINA
router.post("/vacina", authMiddleware, VacinaController.cadastrar);
//CONSULTAR UMA VACINA
router.get("/vacina/:id", authMiddleware, VacinaController.consultarID);
//CONSULTAR TODAS AS VACINA
router.get("/vacina", authMiddleware, VacinaController.consultar);
//DELETAR VACINA
router.delete("/vacina/:id", authMiddleware, VacinaController.deletar);
//EDITAR VACINA
router.put("/vacina", authMiddleware, VacinaController.alterar);
//--------------------------------------------------------//

//ROTAS CARTEIRA de Vacina
//--------------------------------------------------------//
// CADASTRAR VINCULO VACINA CARTEIRA
router.post("/carteira", authMiddleware, CarteiraController.cadastrar);
//CONSULTAR TODAS VACINAS DE UMA CARTEIRA
router.get("/carteira/:id", authMiddleware, CarteiraController.consultarID);
//DELETAR VINCULO VACINA CARTEIRA
router.delete("/carteira/:idcarteira/:idvacina", authMiddleware, CarteiraController.deletar);
//EDITAR VINCULO DA VACINA NA CARTEIRA
router.put("/carteira", authMiddleware, CarteiraController.alterar);
//--------------------------------------------------------//

// Rota protegida que requer autenticação
router.get("/teste", authMiddleware, TesteController.teste);
module.exports = router;
