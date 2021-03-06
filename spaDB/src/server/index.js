const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const data = require('./routes/data');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const corsOptions = {
  origin: ['http://localhost:8080', 'http://localhost:3000']
}
app.use(cors(corsOptions));

app.use(morgan('dev'));

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.use('/data', data);

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
