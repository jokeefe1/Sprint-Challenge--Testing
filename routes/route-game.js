const express = require('express')
const router = express.Router()
const db = require('../models/model-games')

router.get('/', async (req, res) => {
    try {
        const games = await db.find()
        res.status(200).json({
            message: 'Successfully retrieved all games',
            games
        })
    } catch (error) {
        res.status(500).json({
            message: 'There was an error retrieving games',
            error
        })
    }
})

router.post('/', async (req, res) => {
    const game = req.body

    try {
        if (req.body.title && req.body.genre) {
            const exists = await db.findBy(game.title)
            if (exists.length === 0) {
                const newGame = await db.add(game)
                res.status(201).json(newGame)
            } else {
                res.status(405).json({ message: 'title already exists' })
            }
        } else {
            res.status(422).json({ message: 'incomplete info' })
        }
    } catch (error) {
        res.status(500).json({
            message: 'There was an error adding game',
            error
        })
    }
})

module.exports = router
