const User = require('./user.model')
const { hashPassword } = require('../../auth/utils/bcrypt')

const getUsers = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error(error)
  }
}

const getUserById = async (id) => {
  try {
    const user = User.findById(id)
    return user
  } catch (error) {
    throw new Error(error)
  }
}

const getUserByEmail = async (value) => {
  try {
    const user = await User.findOne({ email: value })
    return user
  } catch (error) {
    throw new Error(error)
  }
}

const createUser = async (input) => {
  try {
    const hashedPassword = await hashPassword(input.password)

    const data = {
      ...input,
      password: hashedPassword
    }
    const user = await User.create(data)
    return user
  } catch (error) {
    throw new Error(error)
  }
}

const updateUser = async (id, data) => {
  try {
    const user = await User.findByIdAndUpdate(id, data, { new: true })
    return user
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser
}