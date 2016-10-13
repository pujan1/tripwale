// node app initialize server 
// type node app.js in bash to start the server
// procfile- web: node app.js
//         - heroku 




// npm install to install node modules from package.json



// ***********Getting dependencies***************

var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
// starting express
var app             = express();




// ***********Express router config****************


// connection to MongoDB
// get the url from mlab
mongoose.connect("mongodb://pujan:Omg!tsgunn3r@ds023694.mlab.com:23694/bookstore");




// Logging and Parsing
app.use(express.static(__dirname + '/public'));                
app.use('/bower_components',  express.static(__dirname + '/bower_components')); 
app.use(morgan('dev'));                                         
app.use(bodyParser.json());                                    
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  
app.use(methodOverride());

// **************Routes***************
// todo



// **************Listen****************
app.listen(port);
console.log('App listening on port ' + port);