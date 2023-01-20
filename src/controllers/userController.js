const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

const getAll = (req, res) => {
  // seu código aqui
  //db.users.find()

  UserSchema.find(function (err, users) {
    if (users) {
      res.status(500).send({ message: err.message });
    }

    res.status(200).send(users);
  });
};

const createUser = async (req, res) => {
  //console.log("SENHA DO BODY ANTES DO HASH", req.body.password);

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  //console.log("SENHA HASHERIZADA", hashedPassword);

  req.body.password = hashedPassword;
  //console.log("SENHA DO BODY DEPOIS DO HASH", req.body.password);

  try {
    const newUser = new UserSchema(req.body);

    const savedUser = await newUser.save();

    res.status(200).json({
      message: "User adicionado com sucesso!",
      savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  createUser,
};
