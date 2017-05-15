const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(middleware.addHeaders);
//do not enable cors if you are handling sensitive information
//this exposes the information to malicious attacks

// function ratingChecker(req, res, next) {
//     if (user.restaurants.rating >= 2) {

//   next();
// }

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/LatestOccupation', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantName)


app.listen(8000, function(){
console.log('Listening on 8000')
})