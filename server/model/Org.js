const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrgSchema = new Schema({
  name: {
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
  }
});

module.exports = mongoose.model('Org', OrgSchema);