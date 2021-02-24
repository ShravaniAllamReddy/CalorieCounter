const mongoose = require("mongoose");
const db = require("../models");

// This file empties the food collection and inserts the food below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/foodcalories"
);

const foodSeed = [
  {
        title: 'Pizza',
        thumbnail: "https://www.edamam.com/food-img/c01/c0150280d71059c23c025f501f502dc0.jpg",
        href: "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
      
},
]

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
