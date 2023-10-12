const express = require('express')

const router_client = express.RouterClient()

const clientController = require('./controllers/clientController')
const clientMiddleware = require('./middlewares/clientMiddleware')

router_client.get('/client', clientController.getAll)
router_client.post('/client', clientMiddleware.validarBody, clientController.criarClient)
router_client.delete('/client/:codigo_paciente', clientController.excluiClient)
router_client.put('/client/:codigo_paciente', 
clientMiddleware.validarBody, 
clientMiddleware.validarStatus, 
clientController.atualizaClient)

module.exports = router_client;