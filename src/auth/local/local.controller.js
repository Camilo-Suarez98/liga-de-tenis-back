const { getUserByEmail } = require('../../api/user/user.service');
const { signToken } = require('../auth.service');
const { comparePassword } = require('../utils/bcrypt');

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const getUser = await getUserByEmail(email);
    if (!getUser) {
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await comparePassword(password, getUser.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    };

    const payload = {
      id: getUser.id,
      email: getUser.email
    };

    const token = signToken(payload);

    const profile = {
      name: getUser.name,
      lastName: getUser.lastName,
      email: getUser.email,
      role: getUser.isAdmin
    };

    res.status(200).json({ message: "Welcome to the app", token, profile });
  } catch (error) {
    res.status(400).json({ message: "It's not possible to make login", data: error.message });
  }
}

module.exports = {
  loginHandler
};
