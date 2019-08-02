const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use('/', express.static(path.resolve(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
