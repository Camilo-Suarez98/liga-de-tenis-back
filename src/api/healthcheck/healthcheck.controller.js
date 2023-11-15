const healcheckHandler = (_, res) => {
  res.status(200).json({ message: 'OK', uptime: process.uptime() })
}

module.exports = {
  healcheckHandler
}