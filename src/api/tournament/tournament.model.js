const { Schema, model } = require('mongoose')

const tournamentSchema = new Schema(
  {
    name: String,
    description: String,
    date: String,
    location: String,
    participans: [{
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