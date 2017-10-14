const mongoose = require('mongoose');


const petSchema = new mongoose.Schema({
    name: String,
    type: String,
    breed: String,
    color: String,
    age: Number
});


module.exports = mongoose.model('Pet', petSchema);