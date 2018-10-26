
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
//Restaurant 1
new CreateRestaurant('MOD Pizza', '305 W Harrison St #221, Seattle, WA 98109 305 W Harrison St #221, Seattle, WA 98109 (Seattle Center)', 'Sunday - Thursday 10:30am - 8pm, Friday-Saturday 10:30am -9pm', 'Fast, Italian', 'pizza, salad, italian, breadsticks, beer, milkshake', '(206)428-6315', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'https://modpizza.com/locations/seattle-center/');
//Restaurant 2
new CreateRestaurant('Blue Water Taco Grill', '515 Queen Anne Ave N, Seattle, WA 98119', 'Sunday - Saturday 11am - 9pm', 'sit-down, Mexican', 'Mexican, burrito, tacos, enchiladas, beer, liquor', '(206)352-2407', ['- Wifi no', '-Price $$', '- Distance .5 miles'], 'http://www.bluewatertacogrill.com/');
//Restaurant 3
new CreateRestaurant('Caffe Ladro', '600 Queen Anne Ave N, Seattle, WA 98109', 'Sunday-Saturday 5:30am - 8pm', 'Cafe, sit-down, fast', 'coffee, pastries, tea, cookies, muffins', 'none', ['- Wifi yes', '-Price $', '- Distance .8 miles'], 'https://caffeladro.com/');
//Restaurant 4
new CreateRestaurant(' Uptown Espresso Belltown','2504 4th Ave, Seattle, WA 98121', 'Sunday 6am - 10pm, Monday-Thursday 5am - 10pm, Friday 5pm - 11pm, Saturday 6am - 11pm', 'Cafe, sit-down, fast', 'coffee, pastries, tea, cookies, muffins', '(206)441-1084', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'https://velvetfoam.com/');
//Restaurant 5
new CreateRestaurant('Bedlam Coffee', '2231 2nd Ave, Seattle, WA 98121', 'Sunday 7am - 9pm, Monday- Thursday 6am - 9pm, Friday 6am - 10pm, Saturday 7am - 10pm', 'Cafe, sit-down, fast', 'coffee, pastries, tea, cookies, muffins', '(202)547-0369', ['- Wifi yes', '-Price $', '- Distance .4 miles'], 'http://www.bedlamcoffee.com/');
//Restaurant 6
new CreateRestaurant('Cafe Solstice', '925 E Thomas St, Seattle, WA 98102', 'Sunday 6:30am - 11pm, Monday - Friday 6am - 11pm', 'Cafe, sit-down, fast', ' coffee, pastries, tea, cookies, muffins, sandwiches, beer, soup', '(206)403-1916', ['- Wifi yes', '-Price $', '- Distance 1.7 miles'], 'https://www.cafesolsticeseattle.com/');
//Restaurant 7
new CreateRestaurant('Bambinos Pizzeria', '401 Cedar St, Seattle, WA 98121', 'Sunday - Saturday 11:30am - 11pm', 'sit-down, Italian', ' salad, appetizers, pizza, pasta, calzone, dessert', '(206)269-2222', ['- Wifi no', '-Price $$', '- Distance .3 miles'], 'https://bambinsppizzeria-online-ordering.securebrygid.com/zgrid/themes/10535/intro/index.jsp ');
//Restaurant 8
new CreateRestaurant('Shiro’s Sushi', '2401 2nd Ave, Seattle, WA 98121', 'Sunday - Saturday 5:30pm - 10:30pm', 'sit-down, sushi, soup, tea, wine, ice cream', 'sushi', '(206)443-9844', ['- Wifi no', '-Price $$', '- Distance .3 miles'], ' http://shiros.com/');
//Restaurant 9
new CreateRestaurant(' No Anchor', '2505 2nd Ave #105, Seattle, WA 98121', 'Sunday 11am - 11pm, Monday- Thursday 12pm - 11pm, Friday 12pm -12am, Saturday 11am - 11pm', 'bar, sit-down', 'beer, liquor, wine, appetizers, American', '(206)448-2610', ['- Wifi no', '-Price $$', '- Distance .3 miles'], ' https://www.noanchorbar.com/ ');
//Restaurant 10
new CreateRestaurant('Thai On One', '2904 1st Ave, Seattle, WA 98121', 'Sunday 12pm - 9:30pm, Monday - Friday 11am - 9:30pm, Saturday 12pm - 9:30pm', 'Thai, sit-down', 'thai, appetizers, noodles, soup', '(206)441-4348', ['- Wifi no', '-Price $', '- Distance .1 miles'], ' https://www.thaion1.com/');
