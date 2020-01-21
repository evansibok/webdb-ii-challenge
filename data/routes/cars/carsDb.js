const db = require('../../db-config');

module.exports = {
  get,
  getById,
  insert,
  remove,
  update
}

function get() {
  return db('cars');
}

function getById(id) {
  return db('cars')
    .where({ id })
}

function insert(data) {
  return db('cars')
    .insert(data)
    .then((id) => getById(id[0]));
}

function remove(id) {
  return db('cars')
    .where({ id })
    .del()
}

function update(id, updates) {
  return db('cars')
    .where({ id })
    .update(updates)
}
