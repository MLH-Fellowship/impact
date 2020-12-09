const express = require('express');
const orgRouter = express.Router();
const Org = require('../model/Org');

// GET
orgRouter.get('/', (req, res) => {
  Org.find({}, (err, response) => {
    if(err) {
      console.log(err.message);
    }
    else {
      res.status(200).json(response);
    }
  })
});

// CREATE 
orgRouter.post('/', (req, res) => {
  const org = new Org(req.body);

  org.save((err, doc) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        message: {
          msgBody: 'Unable to add org',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully added org',
          msgError: false
        }
      });
    }
  })
});

// DELETE
orgRouter.delete('/:id', (req, res) => {
  Org.findByIdAndDelete(req.params.id, err => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to delete org',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully deleted org',
          msgError: false
        }
      });
    }
  })
});

// UPDATE
orgRouter.put('/:id', (req, res) => {
  Org.findOneAndUpdate(req.params.id, req.body, { runValidators: true }, (err, response) => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to update org',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully updated org',
          msgError: false
        }
      });
    }
  })
});

module.exports = orgRouter;

