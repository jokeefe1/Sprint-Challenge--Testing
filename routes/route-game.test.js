const st = require('supertest')
const server = require('../server/server')

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
        expect(response.body).toHaveProperty('message', 'Successfully retrieved all games')
    })
})

