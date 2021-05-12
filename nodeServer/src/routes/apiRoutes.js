const express = require('express');

const apiRoutes = express.Router();

const testRoute = require('./testRoute');

apiRoutes.use('/test', testRoute);

module.exports = apiRoutes;
