const express = require("express")
const router = express.Router()

const controller = require("../controller/userController")

// DEMANDA: visualizar todas as notas cadastradas
router.get("/all", controller.getAll)

// DEMANDA: cadastrar nota
router.post("/create", controller.createUser)

// DEMANDA: atualizar uma nota
router.patch("/update/:id", controller.updateUserById)

// DEMANDA: excluir uma nota
router.delete("/delete/:id", controller.deleteUserById)

module.exports = router