const {
  getTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  updateUsersInTournament,
  deleteTournament
} = require('./tournament.service')

const getTournamentsController = async (_, res) => {
  try {
    const tournaments = await getTournaments()

    res.status(200).json({ message: 'Tournaments listed', data: tournaments })
  } catch (error) {
    res.status(400).json({ message: 'Error listing tournaments', error: error.message })
  }
}

const getTournamentByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const tournament = await getTournamentById(id)

    res.status(200).json({ message: 'Tournament listed', data: tournament })
  } catch (error) {
    res.status(400).json({ message: 'Error listing tournament', error: error.message })
  }
}

const createTournamentController = async (req, res) => {
  try {
    const data = req.body

    const newTournament = data
    const tournament = await createTournament(newTournament)

    res.status(201).json({ message: 'Tournament created sucesfully', data: tournament })
  } catch (error) {
    res.status(400).json({ message: 'Tournament could not be created', data: error.message })
  }
}

const updateTournamentController = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const tournament = await updateTournament(id, data)

    res.status(200).json({ message: 'Tournament updated', data: tournament })
  } catch (error) {
    res.status(401).json({ message: 'Tournament could not updated', data: error.message })
  }
}

const updateUsersInTournamentController = async (req, res) => {
  try {
    const { userId, tournamentId } = req.body
    const result = await updateUsersInTournament(userId, tournamentId)

    res.status(200).json({ message: 'Registered user in the tournament', data: result })
  } catch (error) {
    res.status(401).json({ message: 'Error in the registration of user in tournament', data: error.message });
  }
}

const deleteTournamentController = async (req, res) => {
  try {
    const { id } = req.params

    const tournament = await deleteTournament(id)

    res.status(200).json({ message: 'Tournament deleted', data: tournament })
  } catch (error) {
    res.status(401).json({ message: 'Tournament could not be deleted', data: error.message })
  }
}

module.exports = {
  getTournamentsController,
  getTournamentByIdController,
  createTournamentController,
  updateTournamentController,
  updateUsersInTournamentController,
  deleteTournamentController
}