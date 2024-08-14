const express = require('express');
const app = express(); //cria uma instância do express
const indexRouter = express.Router(); //cria uma instância do express.Router

app.listen(8081, function() {
    console.log('Servidor RODANDO na porta 8081');
});

app.get('/', function(req, res) {
    res.send('Introdução ao Node JS');
});

// Rota com parâmetros nome, sobrenome e idade
indexRouter.get('/:nome/:sobrenome/:idade', function(req, res) {
    res.send(`Nome: ${req.params.nome}, Sobrenome: ${req.params.sobrenome}, Idade: ${req.params.idade}`);
});

app.use('/cadastro', indexRouter); //define a rota /cadastro para o indexRouter
