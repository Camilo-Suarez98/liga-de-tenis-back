const user = require('./api/user')
const tournament = require('./api/tournament')

const routes = (app) => {
  app.use('/api/user', user)
  app.use('/api/tournament', tournament)
}

module.exports = routes