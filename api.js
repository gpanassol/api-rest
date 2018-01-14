var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function(req, res) {
//    res.send('hello world');
//});

//app.get('/home', function(req, res) {
//    res.send(random.txt);
//});


//var cb0 = function (req, res, next) {
//    console.log('CB0');
//    next();
//  }
  
//  var cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
//  }
  
//  var cb2 = function (req, res) {
//    res.send('Hello from C!');
//  }
  
//  app.get('/example/c', [cb0, cb1, cb2]);
  

//  app.route('/book')
//  .get(function(req, res) {
//    res.send('Get a random book');
//  })
//  .post(function(req, res) {
//    res.send('Add a book');
//  })
//  .put(function(req, res) {
//    res.send('Update the book');
//  });

//var birds = require('./bird');
//app.use('/birds', birds);


var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

app.get('/', function (req, res) {
    var responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});
  

app.listen(3000 , function () {
        console.log('Starting serve...');
        console.log('Port 3000');
        console.log('http://localhost:3000');
    }
);