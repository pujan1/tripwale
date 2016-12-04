var myApp = angular.module('myApp');
var currentUser;


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
		console.log(currentUser.name);
		$scope.trip._user         = currentUser._id;
		$scope.trip.city          = document.getElementById("autocomplete").value;
		$scope.trip.startpoint    = document.getElementById("autocomplete2").value;
		$scope.trip.endpoint      = document.getElementById("autocomplete3").value;
		$scope.trip.sightsdetails = sightsdetails;
		$scope.trip.time 		  = total_time;



		$http.post('/api/trips/', $scope.trip).success(function(response){
			sweetAlert({
				  title: "Great !!",
				  text: "You saved this trip to your account",
				  type: "warning",
				  showCancelButton: true,
				  confirmButtonColor: "#DD6B55",
				  confirmButtonText: "Stay here",
				  cancelButtonText: "Check out all my trips",
				  closeOnConfirm: true,
				  closeOnCancel: true
				},
				function(isConfirm){
				  if (isConfirm) {
				    
				  } else {
				    window.location.href="#/trips"
				  }
				});
		}).error(function(){
			sweetAlert("some values in the form are left blank, please fill it");
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

// user controller

myApp.controller('UsersController', ['$q','$scope', '$http', '$location', '$routeParams', function($q, $scope, $http, $location, $routeParams){
	console.log('UsersController loaded...');



	$scope.getUsers = function(){
		$http.get('/api/users').success(function(response){
			$scope.users = response;
		});
	}

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/api/users/'+id).success(function(response){
			$scope.user = response;
		});
	}

	$scope.addUser = function(){
		console.log("goes here");
		$http.post('/api/users/', $scope.user).success(function(response){
			
			if(response != null){

				var id = response._id
				console.log(response._id);
				window.location.href='#/users/profile/'+id;

			}
			else{
				sweetAlert("username already exists");
			}
		});
	}

	$scope.loginUser= function(){
		
		
		$http.post('/api/users/login', $scope.user).success(function(response){
			
				var id = response._id
				console.log(response._id);
				window.location.href='#/users/profile/'+id;
			
			
		}).error(function(){
			sweetAlert("incorrect username or password");
		});
	}


}]);