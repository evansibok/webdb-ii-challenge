const express = require('express');
const carsDb = require('./carsDb');

const router = express.Router();

router.get('/', (req, res) => {
  carsDb.get()
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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  carsDb.getById(id)
    .then(car => {
      res.status(200).json(car);
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

  carsDb.insert(carsData)
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  carsDb.remove(id)
    .then(data => {
      res.status(202).json({
        message: "Car deleted!"
      });
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: error.message,
        stack: error.stack
      })
    });
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  carsDb.update(id, newData)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: error.message,
        stack: error.stack
      })
    });
})


module.exports = router;