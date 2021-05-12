const express = require('express');
const http = require('http');
const debug = require('debug')('http');
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: ['http://localhost:8080', 'http://localhost:3000'],
  credentials: true
}

app.use(cors(corsOptions));

app.get('/', (req,res) => {
  res.send('Hello World!\n');
})

app.use('/api', apiRoutes);


if (app.get('env') === 'development') {
  debug('Development mode!');
} else {
  debug('Production mode!');
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  debug(`Listening on port ${port}`);
});
