db.query(
    "INSERT INTO TB_Endereco (Cep, Uf, Localidade, Bairro, Logradouro, Numero) VALUES (?, ?, ?, ?, ?, ?)",
    [
      endereco.cep,
      endereco.uf,
      endereco.localidade,
      endereco.bairro,
      endereco.logradouro,
      endereco.numero,
    ],
    (error, result) => {
      if (error) {
        console.log("ERRO ENDEREÇO");
        console.log(error);
        rejeitado(error);
        return;
      }
      if (result) {
        ID_Endereco = result.insertId;
      }
    }
  );
  db.query(
    "INSERT INTO TB_Celular (Numero, TB_Usuario_ID_Usuario) VALUES (?, ?)",
    [celular.numero, results.insertId],
    (error) => {
      if (error) {
        console.log("ERRO NUMERO");
        console.log(error);
        rejeitado(error);
        return;
      }
    }
  );

  console.log("ID_Usuario: " + results.insertId);
  console.log("ID_ENDERECO: " + ID_Endereco);

  db.query(
    "UPDATE TB_Usuario SET TB_Endereco_ID_Endereco = ? WHERE ID_Usuario = ?",
    [ID_Endereco, results.insertId],
    (error) => {
      if (error) {
        console.log("ERRO NUMERO");
        console.log(error);
        rejeitado(error);
        return;
      }
    }
  );