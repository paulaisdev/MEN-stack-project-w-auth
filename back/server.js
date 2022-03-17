const app = require('./src/app')
const PORT = 3000
// 3000, 6000, 6060, 8080, 8088

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))