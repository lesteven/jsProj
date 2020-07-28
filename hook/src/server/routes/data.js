const express = require('express');
const bodyParser = require('body-parser');


const data = express.Router();


data.route('/')
  .get(async (req, res) => {
    res.json({data: ['foo','bar','baz']});
  })
  .post(async (req, res) => {
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    res.json({'success': 'data posted!'});
  })

data.route('/test')
  .get(async (req, res) => {
    res.json(['foo','bar','baz']);
  })

module.exports = data;
