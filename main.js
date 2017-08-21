
// $('#user-email').on('keypress',function() {
//         var email = $('#user-email').val()
//         var message = 'Welcome Back, ' + email;
//         $('.welcome-message').text(message);
//     });


<!--click karne pe page open hu jaye-->
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',				<!--login page-->
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',						<!--main page-->
			controller: 'mainController'
		})
		.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',					<!--restaurant page-->
		controller: 'restaurantController'
	})
	.when('/shoppinglist',{
		templateUrl:'pages/shoppinglist.html', 					<!--grocerylist or items to be purchased  page-->
		controller:'todoController'
	})
	})


<!--different restaurant information-->

foodieApp.controller('mainController',function($scope) {
$scope.restaurants=
	[{
 name: 'Farzi Cafe',																															<!--first restaurant-->
 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 vote: '4.2',
 cuisines: 'Modern Indian',
 cost: '2200',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 bestDish: {
	name: 'Corn Pizza',																																					<!--best dish of the restaurant-->
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Dominos',																																		<!--second restaurant-->
 address: 'PVR Anupam Saket,Community Center,saket ,New Delhi',
 location: 'Saket',
 category: 'Casual Dining, Bar',
 vote: '4.2',
 cuisines: 'Modern Indian,Chinese',
 cost: '400',
 hours: '12 Noon to 1 AM (Mon-Sun)',
 image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Sagar Ratna',																																				<!--third restaurant-->
 address: 'SCO 488  Sector 35C , Chandigarh',
 location: 'Chandigarh',
 category: 'Casual Dining, Bar',
 vote: '4.5',
 cuisines: 'Modern Indian',
 cost: '2000',
 hours: '11 PM to 11 PM (Mon-Sun)',
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Pizza Hut',																																							<!--fourth restaurant-->
 address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 vote: '4.8',
 cuisines: 'Modern Indian',
 cost: '500',
 hours: '12 Noon to 11 PM (Mon-Sun)',
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
name: 'Burger King',																																							<!--fifth restaurant-->
 address: '40/41, Level 1, Block F , Inner Circle, Connaught Place',
 location: 'Connaught Place',
 category: 'Casual Dining, Bar',
 vote: '4.8',
 cuisines: 'Modern Indian',
 cost: '400',
 hours: '12 Noon to 11 PM (Mon-Sun)',
 image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}
]

})

<!--telling the location of home using the login page-->

foodieApp.controller('loginController',function($scope , $location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home')
	}

})

<!--defining restaurant controller-->

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
		$scope.restaurantId = $routeParams.id;

<!--calling the $scope restaurant to show restaurant one by one-->
	var restaurants =
	 [{
	name: 'Farzi Cafe',																														<!--first restaurant-->
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
 	name: 'Corn Pizza',																																					<!--best dish of the restaurant-->
 	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
 },
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
 {
 name: 'Dominos',																																		<!--second restaurant-->
	address: 'PVR Anupam Saket,Community Center,saket ,New Delhi',
	location: 'Saket',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian,Chinese',
	cost: '400',
	hours: '12 Noon to 1 AM (Mon-Sun)',
image:'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
 name: 'Sagar Ratna',																																	<!--third restaurant-->
	address: 'SCO 488  Sector 35C , Chandigarh',
	location: 'Chandigarh',
	category: 'Casual Dining, Bar',
	vote: '4.5',
	cuisines: 'Modern Indian',
	cost: '2000',
	hours: '11 PM to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
 name: 'Pizza Hut',																																			<!--fourth restaurant-->
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian',
	cost: '500',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},

{
 name: 'Burger King',																																			<!--fifth  restaurant-->
	address: '40/41, Level 1, Block F , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.8',
	cuisines: 'Modern Indian',
	cost: '500',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
}

]
<!--jo user number dalega use ik kaam kyunki array 0 se start hota hai-->
	$scope.restaurant = restaurants[$routeParams.id - 1];

<!--intialising array-->
$scope.ingredients = [];

<!--using clarifai to tell ingredients of best dish of restaurant-->
$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key b368250c9dd04b83b131a364fc6dd36a',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {																							<!--function of success-->
		var ingredients = response.data.outputs[0].data.concepts;
		for (var i =0;i < ingredients.length;i++) {
		$scope.ingredients.push(ingredients[i].name);
  			}

        })
	}
})

<!--telling the grocerylist using the home page-->
  foodieApp.controller('todoController',function($scope , $location) {
  	$scope.goToGroceryList = function() {
  		//console.log('Do Something')
  		$location.url('todo')
  	}
  })


var list;
 // Controller for todolist page
 foodieApp.controller("todo", function($scope) {
 			$scope.list = list;
 			$scope.x=1;
 			console.log(list);
 			$scope.grocery = [];
 			//I need to create an array of object because we will need this for keeping track of which has been bought and which not
 			for (var i = 0; i <=20; i++) {
 				var a = {
 					id: i,
 					//name: list[i],
 					buy: false
 				};
 				$scope.grocery.push(a);
 			}
 			console.log($scope);
 			$scope.bought = [];
 			$scope.nbought = [];

 			$scope.toggle = function(num) {
 				// we need to change value dependin
 				$scope.grocery[num].buy = !$scope.grocery[num].buy;
 				$scope.$parent.grocery[num].buy = !$scope.$parent.grocery[num].buy

 			}
 			$scope.one =function(){

 				$scope.x=1;

 			}
 			$scope.two =function(){

 				$scope.x=2;

 			}
 			$scope.three =function(){

 				$scope.x=3;

 			}
 			$scope.filter = function() {
 $scope.bought=[];
 $scope.nbought=[];
 				for (var i = 0; i < $scope.grocery.length; i++) {
 					if ($scope.grocery[i].buy) {
 						$scope.bought.push($scope.grocery[i]);
 					} else {
 						$scope.nbought.push($scope.grocery[i]);
 					}
 				}

 				console.log($scope.bought);
 			}


 })
