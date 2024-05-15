const bcrypt = require('bcrypt');

const hashPassword = async (password, factor) => {
  const salt = await bcrypt.genSalt(factor);

  return await bcrypt.hash(password, salt);
}

const comparePassword = async (password, hashedPaswword) => {
  return await bcrypt.compare(password, hashedPaswword);
}

module.exports = {
  hashPassword,
  comparePassword
};
