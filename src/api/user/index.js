const router = require('express').Router()
const { isAuthenticated } = require('../../auth/auth.controller')
const {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController
} = require('./user.controller')

router.route('/').get(getUsersController)
router.route('/').post(createUserController)

router.route('/:id').get(isAuthenticated, getUserByIdController)
router.route('/:id').put(isAuthenticated, updateUserController)

module.exports = router