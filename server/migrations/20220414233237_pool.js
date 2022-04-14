exports.up = function(knex, Promise) {
    return knex.schema.createTable('pool', (table) => {
      table.increments();
      table.text('name').notNullable().unique();
      table.text('tournament');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pool');
  };
  