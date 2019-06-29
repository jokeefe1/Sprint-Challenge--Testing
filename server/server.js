const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const routeGame = require('../routes/route-game')

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/games', routeGame)

server.get('/', async (req, res) => {
    try {
        res.json({message: 'You have reached the api'})
    } catch (error) {
        res.status(500).json({ message: 'There was a problem reaching the api'})
    }
})

module.exports = server