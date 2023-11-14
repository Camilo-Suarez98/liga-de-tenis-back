const { createUser, getUserByEmail } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');

const createUserWithGoogleHandler = async (req, res) => {
  const { name, lastName, email, isAdmin } = req.body;

  try {
    const checkUser = await getUserByEmail(email)

    if (checkUser) {
      res.status(401).json({ message: 'Email already exists ' })
    }
    const newUser = {
      ...req.body,
      name,
      lastName,
      email,
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

    res.status(201).json({ message: 'User created succesfully', token, profile })
  } catch (error) {
    res.status(400).json({ message: 'User could not be created', data: error.message })
  }
}

const loginWithGoogleHandler = async (req, res) => {
  const { name, lastName, email, isAdmin } = req.body

  try {
    const data = {
      ...req.body,
      name,
      lastName,
      email,
      isAdmin
    }

    const user = await getUserByEmail(data.email)
    if (!user) {
      res.status(400).json({ message: 'User has not an account with Google in DB' })
    }

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

    res.status(200).json({ message: 'Login succesful', token, profile })
  } catch (error) {
    res.status(400).json({ message: 'Error in login, try it again' })
  }
}

module.exports = {
  createUserWithGoogleHandler,
  loginWithGoogleHandler
}