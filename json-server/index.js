const fs = require('fs')
const path = require('path')

const jsonServer = require('json-server')

const dbPath = path.resolve(__dirname, 'db.json')
const PORT = 8000

const server = jsonServer.create()
const router = jsonServer.router(dbPath)

server.use(jsonServer.defaults())
server.use(jsonServer.bodyParser)

// Middleware для Имитация задержки запроса
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })
  next()
})

// Endpoint for Login
server.post('/login', (req, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'))
    const { username, password } = req.body
    const { users } = db

    const findUser = users.find(
      (user) => user.username === username && user.password === password,
    )

    if (findUser) {
      return res.json(findUser)
    }

    return res.status(403).json({ message: 'AUTH ERROR' })
  } catch (error) {
    console.warn('Server /login Error', error)

    return res.status(500).json({ message: error.message })
  }
})

// Middleware для проверки авторизации
// eslint-disable-next-line
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  }

  next()
})

server.use(router)

// Starting server
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${PORT} Port`)
})
