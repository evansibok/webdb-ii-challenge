const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('API is live!');
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {
  
});

module.exports = router;