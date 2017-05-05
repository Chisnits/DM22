angular.module('weatherApp').service('weatherService', function($http){
    
    var baseUrl = "http://api.openweathermap.org/data/2.5/weather?lat={"+lat+"}&lon={"+lon+"}";
    var apiKey = "8a22a16e9c88b36888875591e135bd0d"
    this.getWeather = function(){
        return $http({
            method: 'GET',
            url: baseUrl + apiKey
    }).then(function(response){
        // console.log(response.data)
        if(response.status === 200){
            return response.data
        }
            return "Something Went Wrong"
        })
    }
    this.getCurrentLocation = function(){
        return $http({
            method: 'GET',
            url: 'http://ip-api.com/json'
    }).then(function(response){
        // console.log(response.data)
        if(response.status === 200){
            return response.data
        }
            return "Something Went Wrong"
        })
    }
    var unsplash = "https://unsplash.it/2000/1500/?random";
    this.getBackground = function(){
        return $http({
            method: 'GET',
            url: unsplash
    }).then(function(response){
        // console.log(response.config.url)
        if(response.status === 200){
            console.log(response.config.url)
            return response.config
        }
            return "Something Went Wrong"
        })
    }


});