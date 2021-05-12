const express = require('express');

const testRoute = express.Router();

testRoute.route('/')
  .get((req, res) => {
    res.status(200).json({ data: 'hello', id: 1})
  })

module.exports = testRoute;
