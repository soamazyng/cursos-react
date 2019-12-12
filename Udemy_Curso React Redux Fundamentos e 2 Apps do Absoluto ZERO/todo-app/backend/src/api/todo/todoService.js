const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);

// new: true - altera as configurações do update para retornar o registro atualizado
// runValidators: true - forçar a validação do schema
Todo.updateOptions({new: true, runValidators: true});

module.exports = Todo;