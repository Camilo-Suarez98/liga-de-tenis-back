const userRouter = require('./api/user');
const tournamentRouter = require('./api/tournament');
const healthcheckRouter = require('./api/healthcheck');

const loginRouter = require('./auth/local');
const googleRouter = require('./auth/google');

const routes = (app) => {
  app.use('/api/user', userRouter);
  app.use('/api/tournament', tournamentRouter);
  app.use('/api/healthcheck', healthcheckRouter);

  app.use('/auth/local', loginRouter);
  app.use('/auth/google', googleRouter);
};

module.exports = routes;
