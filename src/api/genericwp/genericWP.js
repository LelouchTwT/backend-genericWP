const restful = require('node-restful');
const mongoose = restful.mongoose;

const wpSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  resume: { type: String, required: true },
  imgPath: { type: String },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: false }
});

module.exports = restful.model('wp', wpSchema);