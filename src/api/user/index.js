const router = require('express').Router()
const {
  getUsersController,
  createUserController
} = require('./user.controller')

router.route('/').get(getUsersController)
router.route('/').post(createUserController)

module.exports = router