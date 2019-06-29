const express = require('express')
const router = express.Router()
const db = require('../models/model-games')

router.get('/', async (req, res) => {
    try {
        const games = await db.find()
        res.status(200).json({ message: 'Successfully retrieved all games', games})
    } catch (error) {
        res.status(500).json({ message: 'There was an error retrieving games'})
    }
})

router.post('/', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = router