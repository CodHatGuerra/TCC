const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // configura o middleware para o formato JSON
app.use(cors()); // configura o middleware do CORS para permitir requisições de qualquer origem

app.post('/teste', (req, res) => {
  const body = req.body;
  console.log(body); // exibe o corpo da requisição no console
  res.json({ message: 'Dados recebidos com sucesso!' }); // envia uma resposta JSON para o cliente
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});