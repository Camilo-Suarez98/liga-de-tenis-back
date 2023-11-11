const { Schema, model } = require('mongoose')

const tournamentSchema = new Schema(
  {
    name: String,
    description: String,
    date: String,
    location: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Tournament = model('tournament', tournamentSchema)

module.exports = Tournament