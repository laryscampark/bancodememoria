document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const data = {
        nome,
        email
    };

    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => alert(message))
    .catch(error => console.error('Erro:', error));
});
