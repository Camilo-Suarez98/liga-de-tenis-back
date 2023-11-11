const User = require('./user.model')
const {
  getUsers,
  getUserById,
  createUser,
  updateUser
} = require('./user.service')

const getUsersController = async (_, res) => {
  try {
    const users = await getUsers()

    res.status(200).json({ message: 'Users listed', data: users })
  } catch (error) {
    res.status(400).json({ message: 'Error listing users', error: error.message })
  }
}

const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)

    res.status(200).json({ message: 'Users listed', data: user })
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

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const user = await updateUser(id, data)

    res.status(200).json({ message: 'Todo updated', data: user })
  } catch (error) {
    res.status(400).json({ message: 'Todo could not updated', data: error.message })
  }
}

module.exports = {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController
}