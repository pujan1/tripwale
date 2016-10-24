var mongoose = require('mongoose');

// Trip Schema
var tripSchema = mongoose.Schema({
	userid:{
		type: String
		
	},
	city:{
		type: String
		
	},
	places:{
		type: [String]
	},
	rating:{
		type: String
		
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Trip = module.exports = mongoose.model('Trip', tripSchema);

// Get Trips
module.exports.getTrips = function(callback, limit){
	Trip.find(callback).limit(limit);
}

// Get Trip
module.exports.getTripById = function(id, callback){
	Trip.findById(id, callback);
}

// Add Trip
module.exports.addTrip = function(trip, callback){
	Trip.create(trip, callback);
}

// Update Trip
module.exports.updateTrip = function(id, trip, options, callback){
	var query = {_id: id};
	var update = {
		userid: trip.userid,
		places: trip.places,
		city: trip.city,
		rating: trip.rating,
	}
	Trip.findOneAndUpdate(query, update, options, callback);
}

// Delete Trip
module.exports.removeTrip = function(id, callback){
	var query = {_id: id};
	Trip.remove(query, callback);
}