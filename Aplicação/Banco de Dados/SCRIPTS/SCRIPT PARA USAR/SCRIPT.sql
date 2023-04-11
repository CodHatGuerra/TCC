ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

CREATE DATABASE tcc;

USE tcc;



CREATE TABLE IF NOT EXISTS usuario (
  codigo INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  nome VARCHAR(255),
  cpf BIGINT(11),
  rg BIGINT(10),
  sexo VARCHAR(20),
  email VARCHAR(255),
  senha VARCHAR(255),
  telefone VARCHAR(255)
);

INSERT INTO usuario (nome, cpf, rg, sexo, email, senha, telefone) VALUES
('João da Silva', 12345678901, 1234567890, 'Masculino', 'joao.silva@email.com', 'minhasenha123','42424'),
('Maria Oliveira', 98765432101, 9876543210, 'Feminino', 'maria.oliveira@email.com', 'senha123456','42424'),
('Pedro Santos', 45678912301, 4567891230, 'Masculino', 'pedro.santos@email.com', '123456','42424'),
('Lucas Souza', 78912345601, 7891234560, 'Masculino', 'lucas.souza@email.com', 'senha123','42424'),
('Ana Pereira', 32165498701, 3216549870, 'Feminino', 'ana.pereira@email.com', 'senha321','42424');

select * from usuario;