const cadastrarPaciente = document.getElementById('cadastroPaciente')

let formData = new FormData();

cadastrarPaciente.addEventListener('submit', event => {
        event.preventDefault()

        let formData = new FormData(cadastrarPaciente)
        const data = Object.fromEntries(formData)

        console.log(data)
    })
