const router = require('express').Router();
const {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController
} = require('./user.controller');

router.route('/').get(getUsersController);
router.route('/').post(createUserController);

router.route('/:id').get(getUserByIdController);
router.route('/:id').put(updateUserController);
router.route('/:id').delete(deleteUserController);

module.exports = router;
