const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1997',
    database: 'todolist'
});

connection.connect();

app.use(bodyParser.json());

// Rota para salvar no banco
app.post('/cadastrar', (req, res) => {
    const { nome, email } = req.body;

    const query = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
    
    connection.query(query, [nome, email], (error, results) => {
        if(error) {
            console.error(error);
            res.status(500).send('Erro ao cadastrar usuário.');
            return;
        }
        res.send('Usuário cadastrado com sucesso.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
