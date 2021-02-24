import axios from "axios";

export default {
  // Gets all food
  getFood: function() {
    return axios.get("/api/food");
  },
  getFoodCalories: function(query){
    return axios.get("https://api.edamam.com/api/food-database/v2/parser?ingr=" + query + "&app_id=4060566a&app_key=1a17c9c96f0ac16cdbbe310996543468");
  },
  // Gets the food with the given id
  getFoodById: function(id) {
    return axios.get("/api/food/" + id);
  },
 
};
