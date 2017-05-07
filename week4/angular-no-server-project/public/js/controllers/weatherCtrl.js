angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService, pic){
    $scope.lat;
    $scope.lon;
    $scope.showView = false;
    $scope.pictures = pic.url;

weatherService.getCurrentLocation().then(function(location){
    $scope.location = location;
    console.log(location)
    $scope.lat = location.lat;
    $scope.lon = location.lon;
    
    console.log($scope.lat,$scope.lon)
    weatherService.getWeather($scope.lat, $scope.lon).then(function(weather){
        $scope.weather = weather;
        console.log(weather)
        var weatherObj = weather.weather.pop()
        var currentWeather = weatherObj.description;
        $scope.currentWeather = currentWeather;

        
    }) 
});







});