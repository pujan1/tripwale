var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'TripsController',
		templateUrl: 'views/trips.html'
	})
	.when('/trips', {
		controller:'TripsController',
		templateUrl: 'views/trips.html'
	})
	.when('/trips/details/:id',{
		controller:'TripsController',
		templateUrl: 'views/trip_details.html'
	})
	.when('/trips/add',{
		controller:'TripsController',
		templateUrl: 'views/add_trip.html'
	})
	.when('/trips/edit/:id',{
		controller:'TripsController',
		templateUrl: 'views/edit_trip.html'
	})
	.when('/trips/result',{
		controller:'TripsController',
		templateUrl: 'views/trip_result.html'
	})
	.otherwise({
		redirectTo: '/'
	});

});