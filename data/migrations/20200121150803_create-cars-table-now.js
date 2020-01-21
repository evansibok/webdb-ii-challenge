
exports.up = function (knex) {
  // Create Cars table
  return knex.schema.createTable('cars', table => {
    table.increments(); // For id/primary key column, auto increments
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.string('vin').unique().notNullable();
    table.string('mileage').notNullable();
    table.string('transmissionType');
    table.string('status');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex) {
  // Destroy Cars table
  return knex.schema.dropTableIfExists('cars');
};