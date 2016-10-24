var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan')

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
app.use(morgan('dev'))


Trip =require('./models/trip');

// Connect to Mongoose
mongoose.connect('mongodb://pujan:Omg!tsgunn3r@ds023694.mlab.com:23694/bookstore');
var db = mongoose.connection;

app.get('/api/trips', function(req, res){
	Trip.getTrips(function(err, trips){
		if(err){
			throw err;
		}
		res.json(trips);
	});
});

app.get('/api/trips/:_id', function(req, res){
	Trip.getTripById(req.params._id, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

app.post('/api/trips', function(req, res){
	var trip = req.body;
	Trip.addTrip(trip, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

app.put('/api/trips/:_id', function(req, res){
	var id = req.params._id;
	var trip = req.body;
	Trip.updateTrip(id, trip, {}, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

app.delete('/api/trips/:_id', function(req, res){
	var id = req.params._id;
	Trip.removeTrip(id, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

app.listen(3000);
console.log('Running on port 3000...');