// Packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression')

// Config
var app = express();
app.use(compression())

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set Static Path
app.use(express.static(path.join(__dirname, './static')));

// Bodyparser for handling form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var groceryItems = [];

// Post data from form
app.post('/', function(req, res) {
  // Push data of grocery-items to empty array 'groceryItems'
	groceryItems.push(req.body.groceryItem);
  console.log(groceryItems);
	res.redirect('/');
})

// Get data from form
app.get('/', function(req, res) {
  // Pass data form form by template ejs
	res.render('index', {groceryItems: groceryItems});
});

// Clear content .my-grocery-list
app.get('/clear', function(req, res) {
  // Put array 'groceryItems' on empty that make clear-option possible
	groceryItems = [];
	res.render('index', {groceryItems: groceryItems});
});

// Start server
var server = app.listen(7000,function(){
	console.log('Server Started on Port 7000');
});
