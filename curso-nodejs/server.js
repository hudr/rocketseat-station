





const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//Dando require de tudo só pela pasta raiz.
const requireDir = require('require-dir');

//Iniciando o app.
const app = express();

//Dizendo que todos os dados serão tratados como json.
app.use(express.json());
app.use(cors(/*AQUI VOCE PODE PASSAR QUAIS DOMINIOS*/));

//Iniciando o Banco de Dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
//Chamando esse require da pasta raiz.
requireDir("./src/models");

//Primeira rota
//Use pois recebe todo tipo de requisições.
app.use('/api', require('./src/routes'));

app.listen(3001);