const st = require('supertest')
const server = require('../server/server')
const db = require('../data/dbConfig')

describe('test games GET endpoint', () => {
    it('should return 200 OK', async () => {
        const response = await st(server).get('/games')
        expect(response.status).toBe(200)
    })

    it('should return type json', async () => {
        const response = await st(server).get('/games')
        expect(response.type).toEqual('application/json')
    })

    it('should return a message', async () => {
        const response = await st(server).get('/games')
        expect(response.body).toHaveProperty(
            'message',
            'Successfully retrieved all games'
        )
    })
})

describe('test games POST endpoint', () => {
    beforeEach(async () => {
        await db('games').truncate()
    })

    it('Should return 201 OK', async () => {
        const newGame = {
            title: 'Call of Duty',
            genre: 'action',
            releaseYear: 2019
        }

        const response = await st(server)
            .post('/games')
            .send(newGame)
        expect(response.status).toBe(201)
    })

    it('should respond with 422 incomplete info', async () => {
        const newGame = {
            genre: 'action',
            releaseYear: 2019
        }
        const response = await st(server)
            .post('/games')
            .send(newGame)
        expect(response.status).toBe(422)
    })

    it('should return new game', async () => {
        const newGame = {
            title: 'Call of Duty',
            genre: 'action',
            releaseYear: 2019
        }

        const response = await st(server)
            .post('/games')
            .send(newGame)
        expect(response.body).toEqual([1])
    })

    it('should not allow duplicate titles', async () => {
        const newGame = {
            title: 'Call of Duty',
            genre: 'action',
            releaseYear: 2019
        }
       
        await st(server).post('/games').send(newGame)
        const response = await st(server).post('/games').send(newGame)

        expect(response.status).toBe(405)
    })
})
