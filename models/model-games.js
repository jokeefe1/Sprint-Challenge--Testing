const db = require('../data/dbConfig')

function find() {
    return db('games')
}

function add(game) {
    return db('games').insert(game)
}

function findBy(title) {
    return db('games').where({ title })
}

module.exports = {
    find,
    add,
    findBy
}