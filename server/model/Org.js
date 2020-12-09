const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrgSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  cause: {
    type: String
  },
  location: {
    type: String
  },
  website: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Org', OrgSchema);