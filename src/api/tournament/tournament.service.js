const User = require('../user/user.model')
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

const updateUsersInTournament = async (userId, tournamentId) => {
  try {
    const tournament = await Tournament.findById(tournamentId)
    const userExist = User.findById(userId)

    if (!userExist) {
      throw new Error('User does not exist')
    }

    if (tournament.participants.includes(userId)) {
      throw new Error('User already registered in this tournament')
    }

    const checkUser = await User.findByIdAndUpdate(userId, { $push: { tournaments: tournamentId } }, { new: true });
    const checkTournament = await Tournament.findOneAndUpdate(
      { _id: tournamentId },
      { $push: { participants: userId } },
      { new: true }
    );

    return {
      checkUser,
      checkTournament
    }
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
  updateUsersInTournament,
  deleteTournament
}