
exports.up = (knex) => {
 return knex.schema.createTable('groups',(table) => {
      table.increments('id').primary();
      table.text('name_group')

      //relacionamento 
      table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE')

      table.timestamp(true,true)
  })
};

exports.down = (knex) => {
   knex.schema.dropTableIfExists('groups');
};
