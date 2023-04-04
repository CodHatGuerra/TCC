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
    nome: "João Silva",
    cpf: "123.456.789-10",
    email: "joao.silva@example.com",
    telefone: "(11) 98765-4321",
  };
  res.json(informacoes);
});

app.post('/login', (req, res) => {
  const { login, senha } = req.body;

  // Verificar se o login e senha são válidos
  if (login === 'vacina' && senha === '123') {
    // Autenticação bem-sucedida
    res.status(200).json({ mensagem: 'Autenticação bem-sucedida' });
  } else {
    // Autenticação falhou
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }
});


app.listen(8080, () => {
  console.log("Rotas: GET -> localhost:8080/get");
  console.log("Rotas: POST -> localhost:8080/post");
  console.log("Rotas: POST USUARIO = vacina SENHA = 123 -> localhost:8080/login");
});
