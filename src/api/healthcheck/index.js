const router = require('express').Router()
const { healcheckHandler } = require("./healthcheck.controller");

router.route('/').get(healcheckHandler)

module.exports = router