const express = require('express');
const transactionRouter = express.Router();
const Transaction = require('../model/Transaction');

// GET
transactionRouter.get('/', (req, res) => {
  Transaction.find({}, (err, response) => {
    if(err) {
      console.log(err.message);
    }
    else {
      res.status(200).json(response);
    }
  })
});

// CREATE 
transactionRouter.post('/', (req, res) => {
  const transaction = new Transaction(req.body);

  transaction.save((err, doc) => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to add transaction',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully added transaction',
          msgError: false
        }
      });
    }
  })
});

module.exports = transactionRouter;

