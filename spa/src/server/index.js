const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.static('src/client/public'));

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
