const express = require('express');
const paymentRouter = express.Router();
const Payment = require('../model/Payment');

// GET
paymentRouter.get('/', (req, res) => {
  Payment.find({}, (err, response) => {
    if(err) {
      console.log(err.message);
    }
    else {
      res.status(200).json(response);
    }
  })
});

// CREATE 
paymentRouter.post('/', (req, res) => {
  const payment = new Payment(req.body);

  payment.save((err, doc) => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to add payment',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully added payment',
          msgError: false
        }
      });
    }
  })
});

// DELETE
paymentRouter.delete('/:id', (req, res) => {
  Payment.findByIdAndDelete(req.params.id, err => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to delete payment',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully deleted payment',
          msgError: false
        }
      });
    }
  })
});

// UPDATE
paymentRouter.put('/:id', (req, res) => {
  Payment.findOneAndUpdate(req.params.id, req.body, { runValidators: true }, (err, response) => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to update payment',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully updated payment',
          msgError: false
        }
      });
    }
  })
});

module.exports = paymentRouter;

