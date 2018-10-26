('use strict');

var currentImageArrayIndex = 0;
var restaurantImages = [];

=======
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

var restaurantName = document.createElement('h2');
restaurantName.textContent = 'Restaurant Name';
document.body.appendChild(restaurantName);

var restaurantCuisine = document.createElement('p');
restaurantCuisine.textContent = 'Restaurant Cuisine';
document.body.appendChild(restaurantCuisine);

var restaurantDescription = document.createElement('p');
restaurantDescription.textContent = 'Restaurant Description';
document.body.appendChild(restaurantDescription);

var restaurantType = document.createElement('p');
restaurantType.textContent = 'Restaurant Type';
document.body.appendChild(restaurantType);

var restaurantAddress = document.createElement('p');
restaurantAddress.textContent = 'Restaurant Address';
document.body.appendChild(restaurantAddress);

var restaurantDistance = document.createElement('p');
restaurantDistance.textContent = 'Restaurant Distance';
document.body.appendChild(restaurantDistance);

var restaurantHours = document.createElement('p');
restaurantHours.textContent = 'Restaurant Hours';
document.body.appendChild(restaurantHours);

var restaurantPhone = document.createElement('p');
restaurantPhone.textContent = 'Restaurant Phone';
document.body.appendChild(restaurantPhone);

var restaurantWebsite = document.createElement('p');
restaurantWebsite.textContent = 'Restaurant Website';
document.body.appendChild(restaurantWebsite);

var restaurantCodability = document.createElement('p');
restaurantCodability.textContent = 'Restaurant Codability';
document.body.appendChild(restaurantCodability);

var restaurantMenu = document.createElement('p');
restaurantMenu.textContent = 'Restaurant Menu';
document.body.appendChild(restaurantMenu);
