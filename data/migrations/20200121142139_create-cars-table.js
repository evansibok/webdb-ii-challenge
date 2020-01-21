
exports.up = function(knex) {
  // Create Cars table
  return knex.schema.createTable('car', table => {
    table.increments(); // For id/primary key column, auto increments
    table.string('make').notNUllable();
    table.string('model').notNUllable();
    table.integer('VIN').notNUllable();
    table.integer('mileage').notNUllable();
    table.string('transmissionType');
    table.string('status');
  })
};

exports.down = function(knex) {
  // Destroy Cars table
  return knex.schema.dropTableIfExists('car');
};