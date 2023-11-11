const router = require('express').Router()
const {
  getTournamentsController,
  getTournamentByIdController,
  createTournamentController,
  updateTournamentController,
  deleteTournamentController
} = require('./tournament.controller')

router.route('/').get(getTournamentsController)
router.route('/').post(createTournamentController)

router.route('/:id').get(getTournamentByIdController)
router.route('/:id').put(updateTournamentController)
router.route('/:id').delete(deleteTournamentController)

module.exports = router