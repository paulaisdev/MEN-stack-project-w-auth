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
            name: req.body.name,
            email: req.body.email,
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
           mensagem: `Usuário '${userFound.email}' deletado com sucesso!`
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
