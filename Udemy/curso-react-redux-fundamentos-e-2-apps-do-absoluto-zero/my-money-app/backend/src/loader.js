// tenho que transformar o require em uma const para poder enviar o server para o módulode routes, 
// pois o módulo routes precisa receber este server
// e este server está sendo exportado dentro do arquivo config/server
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)