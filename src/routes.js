const userRouter = require('./api/user')
const tournamentRouter = require('./api/tournament')
const loginRouter = require('./auth/local')
const googleRouter = require('./auth/google')

const routes = (app) => {
  app.use('/api/user', userRouter)
  app.use('/api/tournament', tournamentRouter)

  app.use('/auth/local', loginRouter)
  app.use('/auth/google', googleRouter)
}

module.exports = routes