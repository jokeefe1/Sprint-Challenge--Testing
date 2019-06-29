const db = require('../data/dbConfig')

function find() {
    return db('games')
}

function add(game) {
    return db('games').insert(game)
}

module.exports = {
    find,
    add
}