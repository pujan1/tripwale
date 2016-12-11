var mongoose = require('mongoose');

ObjectId = mongoose.Schema.ObjectId;
// Trip Schema
var tripSchema = mongoose.Schema({
	_user:{
	 type: String,
	 ref: 'User' 
	},
	city:{
		type: String,
	},
	startpoint:{
		type: String,
		required: true
	},
	sights:{
		type: [String]
	},
	address:{
		type: [String]
	},
	sightsdetails:{
		type: [{}]
	},
	endpoint:{
		type: String
	},
	rating:{
		type: Number
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	start_date:{
		type: Date
	},
	time:{
		type: Number
	}
});



var Trip = module.exports = mongoose.model('Trip', tripSchema);



// Get Trips
module.exports.getTrips = function(callback, limit){
	Trip.find(callback).limit(limit).populate('_user');
}

// Get Trip
module.exports.getTripById = function(id, callback){
	Trip.findById(id, callback).populate('_user');

}

// Add Trip
module.exports.addTrip = function(trip, callback){
	Trip.create(trip, callback);
}



module.exports.getTripsbyUser = function(id, callback){
	console.log("id - " +id);
	Trip.find({ '_user': id}, callback);
}

module.exports.getHeatMap = function(city, callback){
	Trip.find({'city' : city},callback).select('sightsdetails.lat sightsdetails.long');

}

