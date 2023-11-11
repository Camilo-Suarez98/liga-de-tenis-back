const user = require('./api/user')

const routes = (app) => {
  app.use('/api/user', user)
}

module.exports = routes