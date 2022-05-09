const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/users", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado")
    } catch (error) {
        console.error("Erro: ", error.message)
    }
}

module.exports = {
    connect
}
