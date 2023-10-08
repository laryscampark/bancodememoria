const tbody = document.querySelector('tbody')
const addForm = document.querySelector('.add-form')
const inputTask = document.querySelector('.input-task')

const fetchTarefa = async () => {

    const response = await fetch('http://localhost:3333/tarefa')

    const tarefa = await response.json()

    return tarefa
}

const adicionarTarefa = async (event) => {
    event.preventDefault()

    const tarefa = { title: inputTask.value }

    await fetch('http://localhost:3333/tarefa', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tarefa)
    })

    carregaTarefa()
    inputTask.value = ''
}

const excluiTarefa = async (id) => {
    await fetch(`http://localhost:3333/tarefa/${id}`, {
        method: 'delete'
    })

    carregaTarefa()
}

const atualizaTarefa = async ({ id, title, status }) => {

    await fetch(`http://localhost:3333/tarefa/${id}`, {
        method: 'put',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ title, status })
    })

    carregaTarefa()
}

const formateDate = (dateUTC) => {
    const options = { dateStyle: 'long', timeStyle: 'short' }
    const date = new Date(dateUTC).toLocaleString('pt-br',options)
    return date
}

const createElement = (tag, innerText = '', innerHTML = '') => {

    const element = document.createElement(tag)
    
 if (innerText) {
    element.innerText = innerText
 }
    
 if (innerHTML) {
    element.innerHTML = innerHTML
 }
    return element
}

const createSelect = (value) => {
    const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluido">concluido</option>
    `
    const select = createElement('select', '', options)

    select.value = value

    return select
}


const criarLinha = (tarefa) => {

    const { id, title, created_at, status } = tarefa;

    const tr = document.createElement('tr')
    const tdTitulo = createElement('td', title)
    const tdCreatedAt = createElement('td', formateDate(created_at))
    const tdStatus = createElement('td')
    const tdActions = createElement('td')

    const select = createSelect(status)

    select.addEventListener('change', ({ target }) => atualizaTarefa({ ... tarefa, status: target.value }))

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>')
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">cancel</span>')

    const editForm = createElement('form')
    const editInput = createElement('input')

    editInput.value = title
    editForm.appendChild(editInput)

    editForm.addEventListener('submit', (event) => {
        event.preventDefault()

        atualizaTarefa({ id, title: editInput.value, status })
    })

    editButton.addEventListener('click', () => {
        tdTitulo.innerText = ''
        tdTitulo.appendChild(editForm)
    })

    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')

    deleteButton.addEventListener('click', () => excluiTarefa(id))

    tdStatus.appendChild(select)

    tdActions.appendChild(editButton)
    tdActions.appendChild(deleteButton)

    tr.appendChild(tdTitulo)
    tr.appendChild(tdCreatedAt)
    tr.appendChild(tdStatus)
    tr.appendChild(tdActions)

    return tr
}

const carregaTarefa = async () => {
    const tarefa = await fetchTarefa()

    tbody.innerHTML = ''

    tarefa.forEach((tarefa) => {

        const tr = criarLinha(tarefa)

        tbody.appendChild(tr)
    })
}

addForm.addEventListener('submit', adicionarTarefa)

carregaTarefa()