const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

//routes
const org = require('./routes/org');
const payment = require('./routes/payment');
const user = require('./routes/user');
const transaction = require('./routes/transaction');
app.use('/org', org);
app.use('/payment', payment);
app.use('/user', user);
app.use('/transaction', transaction);

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connected!');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});



