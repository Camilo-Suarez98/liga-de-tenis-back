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
      unique: true
    },
    password: {
      type: String,
      required: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    tournaments: [{
      type: Schema.Types.ObjectId,
      ref: 'tournament'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const User = model('user', userSchema)

module.exports = User