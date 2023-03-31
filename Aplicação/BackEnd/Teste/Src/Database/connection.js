const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'estudo'
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
  });