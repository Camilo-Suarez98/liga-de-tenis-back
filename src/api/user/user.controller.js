const User = require('./user.model')
const {
  getUsers,
  createUser
} = require('./user.service')

const getUsersController = async (req, res) => {
  try {
    const users = await getUsers()

    res.status(200).json({ message: 'Users listed', data: users })
  } catch (error) {
    res.status(400).json({ message: 'Error listing users', error: error.message })
  }
}


const createUserController = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body

    const newUser = {
      name,
      lastName,
      email,
      password
    }
    const user = await createUser(newUser)

    res.status(201).json({ message: 'User could not be created', data: user })
  } catch (error) {
    res.status(400).json({ message: 'User could not be created', data: error.message })
  }
}

module.exports = {
  getUsersController,
  createUserController
}