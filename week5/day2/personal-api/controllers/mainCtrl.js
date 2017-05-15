var user = require('../user.js');

module.exports = {
    getName: function(req, res, next) {
       res.status(200).json(user.name);
    },
    getLocation: function(req, res, next) {
        res.status(200).json(user.location);
    },
    getOccupations: function(req, res, next) {
        res.status(200).json(user.occupations);
    },
    getLatestOccupation: function(req, res, next) {
        res.status(200).json(user.occupations[user.occupations.length - 1]);
    },
    getHobbies: function(req, res, next) {
        res.status(200).json(user.hobbies);
    },
    getHobbiesType: function(req, res, next) {
       var typeQuery = user.hobbies.filter(
           function(value){
               return (value.type === req.params.type)
           }
        );
            res.status(200).json(typeQuery);
    },
    getFamily: function(req, res, next) {
        res.status(200).json(user.family);
    },
    getFamilyGender: function(req, res, next) {
       var genderQuery = user.family.filter(
           function(value){
               return (value.gender === req.params.gender)
           }
        );
            res.status(200).json(genderQuery);
    },
    getRestaurants: function(req, res, next) {
        console.log(req.query.rating);
        const newRating = user.restaurants.filter(
            function(value){
                return req.query.rating <= value.rating
            }
        )
        res.status(200).json(newRating);
        
    },
    getRestaurantName: function(req, res, next) {
        var restaurantQuery = user.restaurants.filter(
            function(value){
                return (value.name === req.params.name)
            }
        );
            res.status(200).json(restaurantQuery);
    }
}