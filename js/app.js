('use strict');

//Constructor function for object properties
var CreateRestaurant = function(restName, restAddress, restHours, foodType, keywords, phone, restCodeability, restLink) {
    this.restName = restName;
    this.restAddress = restAddress;
    this.restHours = restHours;
    this.foodType = foodType;
    this.keywords = keywords;
    this.phone = phone;
    this.restCodeability = restCodeability;
    this.restLink = restLink;
    this.restArr = []; //Array for storing new objects
    this.restPastSearches = []; //Array for storing past searches
}

//Protype for returning restaurant list/info
CreateRestaurant.prototype.renderAllRestaurants = function() {
//Conditional for if search data in store

//Loop to see if search name === restName || search food type === foodType || search location === restAddress
    
}

//Function for clearing localStorage
var clearFunction = function() {

}















//Twenty restaurants will inherit object properties and method
var modPizza = new CreateRestaurant('MOD Pizza', '305 W Harrison St #221, Seattle, WA 98109 305 W Harrison St #221, Seattle, WA 98109 (Seattle Center)', 'Sunday - Thursday 10:30am - 8pm, Friday-Saturday 10:30am -9pm', 'Fast, Italian', 'pizza, salad, italian, breadsticks, beer, milkshake', '(206)428-6315', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'https://modpizza.com/locations/seattle-center/');

var blueWater = new CreateRestaurant('Blue Water Taco Grill', '515 Queen Anne Ave N, Seattle, WA 98119', 'Sunday - Saturday 11am - 9pm', 'sit-down, Mexican', 'Mexican, burrito, tacos, enchiladas, beer, liquor', '(206)352-2407', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'http://www.bluewatertacogrill.com/');

var caffeLadro = new CreateRestaurant('Caffe Ladro', '600 Queen Anne Ave N, Seattle, WA 98109', 'Sunday-Saturday 5:30am - 8pm', 'Cafe, sit-down, fast', 'coffee, pastries, tea, cookies, muffins', 'none', ['- Wifi yes', '-Price $', '- Distance .8 miles'], 'https://caffeladro.com/');

var uptownEspresso = new CreateRestaurant(' Uptown Espresso Belltown','2504 4th Ave, Seattle, WA 98121', 'Sunday 6am - 10pm, Monday-Thursday 5am - 10pm, Friday 5pm - 11pm, Saturday 6am - 11pm', 'Cafe, sit-down, fast', 'coffee, pastries, tea, cookies, muffins', '(206)441-1084', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'https://velvetfoam.com/');

