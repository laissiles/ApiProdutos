const express = require('express')
const produtoController = require('./controllers/produtoController');
const routes = express.Router();


 //lista produtos
routes.get('/produto', produtoController.lista);

//cadastro
routes.post('/produto', produtoController.create);

//deletar
routes.delete('/produto/:id', produtoController.deletar);

//update
routes.put('/produto/:id', produtoController.atualizar);

    module.exports=routes;