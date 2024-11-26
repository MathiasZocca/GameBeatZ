var database = require("../database/config");

function atualizarVoto(nomeJogo) {
  var instrucaoSql = `
        UPDATE votos
        SET quantidade = quantidade + 1
        WHERE jogo = '${nomeJogo}'
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarVotos() {
  var instrucaoSql = `SELECT quantidade FROM votos`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  atualizarVoto,
  buscarVotos,
};
