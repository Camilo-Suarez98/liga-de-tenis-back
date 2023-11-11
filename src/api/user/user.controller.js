const {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser
} = require('./user.service')
const { signToken } = require('../../auth/auth.service')

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

    res.status(200).json({ message: 'User listed', data: user })
  } catch (error) {
    res.status(400).json({ message: 'Error listing user', error: error.message })
  }
}

const createUserController = async (req, res) => {
  try {
    const { name, lastName, email, password, isAdmin } = req.body

    const getUser = await getUserByEmail(email)
    if (getUser) {
      return res.status(401).send('Email already exists');
    }

    const newUser = {
      name,
      lastName,
      email,
      password,
      isAdmin
    }
    const user = await createUser(newUser)

    const payload = {
      id: user.id,
      email: user.email
    }

    const token = signToken(payload)

    const profile = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      role: user.isAdmin
    }

    res.status(201).json({ message: 'User created sucesfully', token, profile })
  } catch (error) {
    res.status(400).json({ message: 'User could not be created', data: error.message })
  }
}

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const user = await updateUser(id, data)

    res.status(200).json({ message: 'User updated', data: user })
  } catch (error) {
    res.status(401).json({ message: 'User could not updated', data: error.message })
  }
}

module.exports = {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController
}