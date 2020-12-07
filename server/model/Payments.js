const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentsSchema = new Schema({
  userid: {
    type: Number,
    required: true
  },
  freq: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Payments', PaymentsSchema);