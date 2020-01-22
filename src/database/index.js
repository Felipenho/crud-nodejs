const mongoose = require('mongoose');

const db = "mongodb://crud:mongo@mongo:27017/crud-nodejs";

mongoose.connect(db, { 
  useCreateIndex: true,
  useFindAndModify: false, 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
mongoose.Promise = global.Promise;

module.exports = mongoose;