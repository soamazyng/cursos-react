const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) //passa o parametro para o módulo routes