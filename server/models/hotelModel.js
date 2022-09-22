const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const Schema = mongoose.Schema;
// const MONGO_URI = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../secrets.json'))).MONGO_URI;
const MONGO_URI = `mongodb+srv://Nigerian:Nigerian@cluster0.ma90j.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'hotels'
})
  // .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const HotelSchema = new mongoose.Schema({
  nameOfHotel: { type: String, required: true, unique: true },
  action: { type: String, required: true },
});

module.exports = mongoose.model('Hotel', HotelSchema);

// You must export your model through module.exports
// The collection name should be 'student'