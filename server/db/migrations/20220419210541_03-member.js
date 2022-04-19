exports.up = (knex, Promise) => {
    return knex.schema.createTable('member', (table) => {
      table.increments();
      table.text('name').notNullable();
      table.integer('pool_id').unsigned().references('pool.id').onDelete('CASCADE').notNullable();
    });
  };
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('member');
  };