const handleHttpError = (res, message = 'Algo sucedio', code = 400) => {
  res.status(code).json({ error: message })
}

module.exports = { handleHttpError }
