const express = require('express');

//desta forma eu devo receber o server assim que o require deste módulo for chamado
module.exports = server => {

    const router = express.Router();
    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos'); //registra as rotas com o /todos como prefixo

}