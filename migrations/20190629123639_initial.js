
exports.up = async function(knex) {
  await knex.schema.createTable('games', tbl => {
      tbl.increments()
      tbl.string('title').notNullable().unique()
      tbl.string('genre').notNullable()
      tbl.integer('releaseYear')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('games')
};
