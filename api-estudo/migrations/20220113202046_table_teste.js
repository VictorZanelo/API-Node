
exports.up = function(knex) {
  return knex.schema.createTable('teste',(table)=>{
      table.increments('id')
      table.text('username').unique().notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('update_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('teste')
};
