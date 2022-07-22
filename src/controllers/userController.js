const UserSchema = require("../models/userSchema")

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
}

const createUser = async (req, res) => {
  try {
      const newUser = new UserSchema(req.body)

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

module.exports = {
  getAll,
  createUser
}
