exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('first')
      table.string('last')
    }) 
  };
  exports.down = function(knex, Promise) {
  };