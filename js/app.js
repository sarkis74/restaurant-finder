('use strict');

//Constructor function for object properties
var AllRestaurants = function(restName, foodType, restAddress, restHours, restCodeability, restRatings, description) {
    this.restName = restName;
    this.foodType = foodType;
    this.restAddress = restAddress;
    this.restHours = restHours;
    this.restCodeability = restCodeability;
    this.restRatings = restRatings;
    this.description = description;
    this.restArr = []; //Array for storing new objects
    this.restPastSearches = []; //Array for storing past searches
}

//Protype for returning restaurant list/info
AllRestaurants.prototype.renderAllRestaurants = function() {
//Conditional for if search data in store

//Loop to see if search name === restName || search food type === foodType || search location === restAddress
    
}

//Function for clearing localStorage
var clearFunction = function() {

}















//Twenty restaurants will inherit object properties and method
//var AllRestaurants = new();

