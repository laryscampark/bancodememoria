const app_client = require('./app_client')
require('dotenv').config()

const PORT = process.env.PORT || 3301

app_client.listen(PORT, () => console.log('Servidor rodando na porta ${PORT}'));