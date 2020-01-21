const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('API is live!');
});

module.exports = router;