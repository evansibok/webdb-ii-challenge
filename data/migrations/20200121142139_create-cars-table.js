
exports.up = function (knex) {
  // Create Cars table
  return knex.schema.createTable('cars', table => {
    table.increments(); // For id/primary key column, auto increments
    table.string('make').notNUllable();
    table.string('model').notNUllable();
    table.string('VIN', 17).unique().notNUllable();
    table.string('mileage').notNUllable();
    table.string('transmissionType');
    table.string('status');
    table.timestamps('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex) {
  // Destroy Cars table
  return knex.schema.dropTableIfExists('car');
};

// The critical information for each car is the VIN, make, model, and mileage. - notNullable

// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.