const express = require('express');
const bodyParser = require('body-parser');


const data = express.Router();


data.route('/')
  .get(async (req, res) => {
    res.json({data: ['foo','bar','baz']});
  })

data.route('/test')
  .get(async (req, res) => {
    res.json(['foo','bar','baz']);
  })

module.exports = data;
