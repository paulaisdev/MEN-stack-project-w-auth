const UserSchema = require('../models/userSchema')
const mongoose = require('mongoose')

const getAll = async (req, res) => {
    try {
        const users = await UserSchema.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = new UserSchema({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.author,
            email: req.body.title,
            createdAt: new Date()
        })

        const savedUser = await newUser.save()
        res.status(200).json({
            message: "User adicionado com sucesso!",
            savedUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateUserById = async (req, res) => {
    try {
        const findUser = await UserSchema.findById(req.params.id)
        console.log(findUser)

        if (findUser) {            
            findUser.name = req.body.name || findUser.name
            findUser.email = req.body.email || findUser.email
        }

        const savedUser = await findUser.save()

        res.status(200).json({
            message: "Usuário atualizada com sucesso!",
            savedUser
        })

    } catch (error) {
        console.error(error)
    }
}

const deleteUserById = async (req, res) => {
    try {
        const userFound = await UserSchema.findById(req.params.id)

       await userFound.delete()

       res.status(200).json({
           mensagem: `Usuário '${userFound.email}' deletada com sucesso!`
       })

    } catch (err) {
        res.status(400).json({
            mensagem: err.message
        })
    }
}

module.exports = {
    getAll,
    createUser,
    updateUserById, 
    deleteUserById
}