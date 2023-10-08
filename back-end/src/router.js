const express = require('express')

const router = express.Router()

const tarefaController = require('./controllers/tarefaController')
const tarefaMiddleware = require('./middlewares/tarefaMiddleware')

router.get('/tarefa', tarefaController.getAll)
router.post('/tarefa', tarefaMiddleware.validarBody, tarefaController.criarTarefa)
router.delete('/tarefa/:id', tarefaController.excluiTarefa)
router.put('/tarefa/:id', 
tarefaMiddleware.validarBody, 
tarefaMiddleware.validarStatus, 
tarefaController.atualizaTarefa)

module.exports = router;