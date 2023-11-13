const router = require('express').Router()
const {
  getTournamentsController,
  getTournamentByIdController,
  createTournamentController,
  updateTournamentController,
  deleteTournamentController
} = require('./tournament.controller')
const { isAuthenticated } = require('../../auth/auth.controller')

router.route('/').get(getTournamentsController)
router.route('/').post(isAuthenticated, createTournamentController)

router.route('/:id').get(getTournamentByIdController)
router.route('/:id').put(isAuthenticated, updateTournamentController)
router.route('/:id').delete(isAuthenticated, deleteTournamentController)

module.exports = router