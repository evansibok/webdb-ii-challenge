const express = require('express');
const db = require('../db-config');

const router = express.Router();

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: error.message,
        stack: error.stack
      })
    });
});

router.post('/', (req, res) => {
  const carsData = req.body;

  db('cars')
  .insert(carsData)
  .then(data => {
    res.status(201).json(data);
  })
    .catch(error => {
      res.status(500).json({
        errorMessage: error.message,
        stack: error.stack
      })
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars')
    .where({ id: id })
    .then(car => {
      res.status(200).json(car)
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: error.message,
        stack: error.stack
      })
    });
});


module.exports = router;