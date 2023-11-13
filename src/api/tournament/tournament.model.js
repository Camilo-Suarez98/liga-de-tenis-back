const { Schema, model } = require('mongoose')

const tournamentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    participants: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Tournament = model('tournament', tournamentSchema)

module.exports = Tournament