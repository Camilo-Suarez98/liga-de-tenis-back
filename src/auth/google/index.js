const router = require('express').Router();
const {
  createUserWithGoogleHandler,
  loginWithGoogleHandler
} = require('./google.controller');

router.route('/').post(createUserWithGoogleHandler);
router.route('/login').post(loginWithGoogleHandler);

module.exports = router;
