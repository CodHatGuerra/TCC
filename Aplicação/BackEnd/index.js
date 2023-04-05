const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // configura o middleware para o formato JSON
app.use(cors()); // configura o middleware do CORS para permitir requisições de qualquer origem

app.post("/post", (req, res) => {
  const body = req.body;
  console.log(body); // exibe o corpo da requisição no console
  res.json({ message: "Dados recebidos com sucesso!" }); // envia uma resposta JSON para o cliente
});

app.get("/get", (req, res) => {
  const informacoes = {
    id: 1,
    nome: "Eliel Elano Chaves Silva",
    cpf: "00000000-00",
    email: "elielelano7@.com",
    telefone: "(14)982-118732",
  };
  res.json(informacoes);
});

app.listen(8080, () => {
  console.log("Rotas: GET -> localhost:8080/get");
  console.log("Rotas: POST -> localhost:8080/post");
});
