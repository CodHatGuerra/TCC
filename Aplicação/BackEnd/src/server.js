require("dotenv").config({ path: "variaveis.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}/`);
  console.log(`Rota para cadastrar pessoa: http://localhost:8080/api/usuario`);
  console.log(`Rota para Verificar Login: http://localhost:8080/api/login`);
});
