const connection = require('./conecta')

const getAll = async () => {
    const [tarefa] = await connection.execute('SELECT * FROM tarefa')
    return tarefa
}


const criarTarefa = async (tarefa) => {

    const { title } = tarefa

    const dateUTC = new Date(Date.now()).toUTCString()

    const query = 'INSERT INTO tarefa (title, status, created_at) VALUES (?,?,?)'

    const [criaTarefa] = await connection.execute(query, [title, 'pendente', dateUTC])

    return {insertId: criaTarefa.insertId}
}

const excluiTarefa = async (id) => {
    const [removeTarefa] = await connection.execute('DELETE FROM tarefa WHERE id = ?', [id])
    
    return removeTarefa
}

const atualizaTarefa = async (id, tarefa) => {
    
    const { title, status } = tarefa

    const query = 'UPDATE tarefa SET title = ?, status = ? WHERE id = ?'

    const [atualizarTarefa] = await connection.execute(query, [title, status, id])

    return atualizarTarefa
}

module.exports = {
    getAll,
    criarTarefa,
    excluiTarefa,
    atualizaTarefa
}