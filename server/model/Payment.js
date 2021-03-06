const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  userid: { // sender
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  orgid: { // receiver
    type: mongoose.Schema.Types.ObjectId,
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

// enforce 1 payment per sender - receiver pair
PaymentSchema.index({ 'userid': 1, 'orgid': 1 }, { unique: true });

module.exports = mongoose.model('Payment', PaymentSchema);