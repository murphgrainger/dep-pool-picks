exports.up = (knex, Promise) => {
    return knex.schema.createTable('pool', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.integer('tournament_id').unsigned().references('tournament.id').onDelete('CASCADE').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('pool');
  };