const Tournament = require('./tournament.model')

const getTournaments = async () => {
  try {
    const tournaments = await Tournament.find()
    return tournaments
  } catch (error) {
    throw new Error(error)
  }
}

const getTournamentById = async (id) => {
  try {
    const tournament = Tournament.findById(id)
    return tournament
  } catch (error) {
    throw new Error(error)
  }
}

const createTournament = async (data) => {
  try {
    const tournament = await Tournament.create(data)
    return tournament
  } catch (error) {
    throw new Error(error)
  }
}

const updateTournament = async (id, data) => {
  try {
    const tournament = await Tournament.findByIdAndUpdate(id, data, { new: true })
    return tournament
  } catch (error) {
    throw new Error(error)
  }
}

const deleteTournament = async (id) => {
  try {
    const tournament = await Tournament.findByIdAndDelete(id)
    return tournament
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament
}