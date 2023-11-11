const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: String,
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const User = model('user', userSchema)

module.exports = User