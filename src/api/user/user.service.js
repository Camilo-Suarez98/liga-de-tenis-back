const User = require('./user.model')

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

const createUser = async (data) => {
  try {
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
  createUser,
  updateUser
}