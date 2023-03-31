const express = require('express');

const app = express();
const port = 8080;


app.get('/get', (req, res) => {
    res.contentType("application/html");
    res.status(200).send('<h1>Hello World</h1>')
});

app.get('/getUsers', (req, res) => {
    res.contentType("application/json")

        connection.query('SELECT * FROM pessoa', (err, results) => {
            if (err) throw err;
            res.send(results);
          });

    res.status(200).json(data)
    
})

app.listen(port, () => {
    console.log("Rodando com Express na Porta: " + port);
});
