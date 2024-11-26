var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController");

router.post("/votar/:nomeJogo", function (req, res) {
  votoController.votarPorNome(req, res); // invoca a função da controller para "incrementar votos por nome do jogo"
});

router.get("/ultimos", function (req, res) {
  votoController.obterVotosAtualizados(req, res); // invoca a função da controller para "obter os votos atualizados"
});

module.exports = router;
