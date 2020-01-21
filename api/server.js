const express = require('express');
const helmet = require('helmet');

const carsRouter = require('../data/routes/cars-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

// server.use((req, res) => {
//   console.log("API is live!");
// })

module.exports = server;