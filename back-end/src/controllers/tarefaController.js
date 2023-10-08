const tarefaModel = require('../models/tarefaModel')

const getAll = async (request, response) => {
    
    const tarefa = await tarefaModel.getAll()

    return response.status(200).json(tarefa)
}

const criarTarefa = async (request, response) => {

    const criaTarefa = await tarefaModel.criarTarefa(request.body)

    return response.status(201).json(criaTarefa)
}

const excluiTarefa = async (request, response) => {
    const {id } = request.params

    await tarefaModel.excluiTarefa(id)
    
    return response.status(204).json()
}

const atualizaTarefa = async (request, response) => {

    const { id } = request.params

    await tarefaModel.atualizaTarefa(id, request.body)

    return response.status(204).json()
}

module.exports = {
    getAll,
    criarTarefa,
    excluiTarefa,
    atualizaTarefa
}