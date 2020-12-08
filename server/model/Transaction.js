const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  userid: { // sender
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  orgid: { // receiver
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  paymentid: { // id of recurring payment
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
}, { timestamps: { createdAt: 'createdat' } });

module.exports = mongoose.model('Transaction', TransactionSchema);