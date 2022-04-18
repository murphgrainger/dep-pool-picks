exports.up = (knex, Promise) => {
    return knex.schema.createTable('pool', (table) => {
      table.increments();
      table.text('name').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('pool');
  };
  