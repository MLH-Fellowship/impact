const { resolveSoa } = require('dns');
const express = require('express');
const userRouter = express.Router();
const User = require('../model/User');

// GET
userRouter.get('/', (req, res) => {
  User.find({}, (err, response) => {
    if(err) {
      console.log(err.message);
    }
    else {
      res.status(200).json(response);
    }
  })
});

// CREATE 
userRouter.post('/', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        message: {
          msgBody: 'Unable to add user',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully added user',
          msgError: false
        }
      });
    }
  })
});

// DELETE
userRouter.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, err => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to delete user',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully deleted user',
          msgError: false
        }
      });
    }
  })
});

// UPDATE
userRouter.put('/:id', (req, res) => {
  User.findOneAndUpdate(req.params.id, req.body, { runValidators: true }, (err, response) => {
    if (err) {
      res.status(500).json({
        message: {
          msgBody: 'Unable to update user',
          msgError: true
        }
      });
    }
    else {
      res.status(200).json({
        message: {
          msgBody: 'Successfully updated user',
          msgError: false
        }
      });
    }
  })
});

userRouter.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, doc) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Could not find user!" });
    } else if (!doc) {
      console.log(`No user with email ${req.body.email}.`);
      res.status(500).send({ message: "Could not find user!" });
    }
    else if (doc.password == req.body.password)
      res.status(200).send({ 'user': doc.email, 'userID': doc.id });
    else {
      res.status(500).send('Unknown error.');
      console.log('Document:', doc);
      console.log('Request:', req.body);
    }
  });
});

module.exports = userRouter;

