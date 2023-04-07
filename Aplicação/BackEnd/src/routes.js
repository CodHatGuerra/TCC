const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/CarroController");

router.post("/usuario", CarroController.inserir);

module.exports = router;
