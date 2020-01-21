
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Range Rover',
          model: 'X-2330',
          VIN: '1X27498VHJNSYLE90',
          mileage: '10000 MPG',
        },
        {
          make: 'Toyota Camry',
          model: 'F0998',
          VIN: '39499059XLDDFEI40',
          mileage: '12302 MPG',
        },
        {
          make: 'Volkswagen',
          model: 'E-1198',
          VIN: '89F0KVNNE49K2K511',
          mileage: '10000 MPG',
        }
      ]);
    });
};