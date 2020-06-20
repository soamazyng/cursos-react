const express = require('express')
const BillingCycle = require('../api/billingCycle/billingCycleService')

// Este server que está recebendo é do arquivo server.js
module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento     
    BillingCycle.register(router, '/billingCycles')
}