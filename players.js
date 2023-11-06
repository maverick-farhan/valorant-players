const mongoose = require('mongoose');
const {Schema} = mongoose;
const schema = new Schema({
  name:String,
  team:String,
  code:String,
  country:String,
  role:String,
  img:String
});
const Model = mongoose.model('players',schema);
module.exports = Model;
