exports.up = (knex, Promise) => {
    return knex.schema.createTable('tournament', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.text('sport');
      table.text('year');
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('tournament');
  };