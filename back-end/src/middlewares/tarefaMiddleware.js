const validarBody = (request, response, next) => {
    const { body } = request

    if (body.title === undefined) {
        return response.status(400).json({ message: 'O campo titulo deve ser obrigatório' })
    }

    if (body.title === '') {
        return response.status(400).json({ message: 'O campo não pode ser vazio'})
    }

    next()
}

const validarStatus = (request, response, next) => {
    const { body } = request

    if (body.status === undefined) {
        return response.status(400).json({ message: 'O campo status deve ser preenchido'})
    }

    if (body.status === '') {
        return response.status(400).json({ message: 'O status não pode ser vazio'})
    }

    next()
}

module.exports = {
    validarBody,
    validarStatus
}