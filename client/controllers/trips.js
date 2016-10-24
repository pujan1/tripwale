var myApp = angular.module('myApp');

myApp.controller('TripsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('TripsController loaded...');

	$scope.getTrips = function(){
		$http.get('/api/trips').success(function(response){
			$scope.trips = response;
		});
	}

	$scope.getTrip = function(){
		var id = $routeParams.id;
		$http.get('/api/trips/'+id).success(function(response){
			$scope.trip = response;
		});
	}

	$scope.addTrip = function(){
		console.log($scope.trip);
		$http.post('/api/trips/', $scope.trip).success(function(response){
			window.location.href='#/trips';
		});
	}

	$scope.updateTrip = function(){
		var id = $routeParams.id;
		$http.put('/api/trips/'+id, $scope.trip).success(function(response){
			window.location.href='#/trips';
		});
	}

	$scope.removeTrip = function(id){
		$http.delete('/api/trips/'+id).success(function(response){
			window.location.href='#/trips';
		});
	}
}]);