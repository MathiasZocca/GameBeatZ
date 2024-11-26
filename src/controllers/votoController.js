var votoModel = require("../models/votoModel");

function votarPorNome(req, res) {
  var nomeJogo = req.params.nomeJogo;
  console.log("Jogo recebido:", nomeJogo);

  votoModel.atualizarVoto(nomeJogo)                             // invoca a função da model para atualizar os votos
    .then(function (resultado) {                                // ENTÃO, obtém o resultado após retornar a execução da query SQL na model
      res.status(200).send("Voto contabilizado com sucesso!");  // -- retorna o status 200 (OK) com a mensagem "Voto contabilizado com sucesso!"
    })
    .catch(function (erro) {                                                // CAPTURA qualquer erro ocorrido durante a execução da query para a busca dos votos
      console.log(erro);                                                    // exibe o JSON contendo as informações do erro ocorrido
      console.log("Houve um erro ao atualizar os votos.", erro.sqlMessage); // exibe a mensagem do erro ocorrido
      res.status(500).json(erro.sqlMessage);                                // retorna o status 500 (Erro) com a mensagem do erro ocorrido
    });              
}

function obterVotosAtualizados(req, res) {
  console.log(`Buscando os votos...`);

  votoModel.buscarVotos()                                     // invoca a função da model para buscar os votos
    .then(function (resultado) {                              // ENTÃO, obtém o resultado após retornar a execução da query SQL na model
      if (resultado.length > 0) {                             // - verifica se obteve resultados
        console.log(resultado);                               // -- exibe no console o resultado obtido
        res.status(200).json(resultado);                      // -- retorna o status 200 (OK) com os dados formatados em JSON
      } else {                                                // - caso não obtenha resultados
        res.status(204).send("Nenhum resultado encontrado!"); // -- retorna o status 204 (Not Found) com a mensagem "Nenhum resultado encontrado!"
      }
    })
    .catch(function (erro) {                                             // CAPTURA qualquer erro ocorrido durante a execução da query para a busca dos votos
      console.log(erro);                                                 // exibe o JSON contendo as informações do erro ocorrido
      console.log("Houve um erro ao buscar os votos.", erro.sqlMessage); // exibe a mensagem do erro ocorrido
      res.status(500).json(erro.sqlMessage);                             // retorna o status 500 (Erro) com a mensagem do erro ocorrido
    });
}

module.exports = {
  votarPorNome,
  obterVotosAtualizados,
};
