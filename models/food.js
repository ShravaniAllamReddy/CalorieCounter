const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // url for Food web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  }

});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
