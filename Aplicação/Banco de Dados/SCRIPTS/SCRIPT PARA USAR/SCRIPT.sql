CREATE DATABASE tcc;

USE tcc;

CREATE TABLE IF NOT EXISTS usuario (
  codigo INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  nome VARCHAR(255),
  cpf BIGINT(11),
  rg BIGINT(10),
  sexo VARCHAR(20),
  data_nascimento DATE,
  estado_civil VARCHAR(50),
  email VARCHAR(255),
  numero INT(5),
  nacionalidade VARCHAR(50),
  rua VARCHAR(255),
  bairro VARCHAR(255),
  estado VARCHAR(50),
  cep BIGINT(8),
  senha VARCHAR(255)
  
);

INSERT INTO usuario (nome, cpf, rg, sexo, data_nascimento, estado_civil, email, numero, nacionalidade, rua, bairro, estado, cep, senha) VALUES 
  ('João Silva', 12345678901, 12345678, 'Masculino', '1980-05-15', 'Solteiro', 'joao.silva@example.com', 1234, 'Brasileira', 'Rua A', 'Bairro 1', 'São Paulo', 12345678, 123),
  ('Maria Santos', 98765432109, 87654321, 'Feminino', '1990-01-01', 'Casada', 'maria.santos@example.com', 5678, 'Brasileira', 'Rua B', 'Bairro 2', 'Rio de Janeiro', 87654321, "1234"),
  ('Pedro Oliveira', 34567890123, 23456789, 'Masculino', '1975-11-30', 'Viúvo', 'pedro.oliveira@example.com', 9101, 'Brasileira', 'Rua C', 'Bairro 3', 'Minas Gerais', 23456789, "12345"),
  ('Ana Paula Costa', 90123456789, 34567890, 'Feminino', '1985-07-20', 'Divorciada', 'ana.paula@example.com', 2345, 'Brasileira', 'Rua D', 'Bairro 4', 'Bahia', 34567890, "123456"),
  ('Lucas Pereira', 56789012345, 45678901, 'Masculino', '2000-03-10', 'Solteiro', 'lucas.pereira@example.com', 6789, 'Brasileira', 'Rua E', 'Bairro 5', 'Paraná', 45678901, "1234567");


select * from usuario;