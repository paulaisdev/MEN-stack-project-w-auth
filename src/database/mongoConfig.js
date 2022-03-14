const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://usuario:12345@cluster0.dn30n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado (:")
    } catch (error) {
        console.log("Erro: ", error.message)
    }
}

module.exports = {
    connect
}
