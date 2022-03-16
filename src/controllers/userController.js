const UserSchema = require('../models/userSchema')

const getAll = async (req, res) => {
    try {
        const allUsers = await UserSchema.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}


module.exports = { getAll }
