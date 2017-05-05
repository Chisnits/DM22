angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService){

weatherService.getWeather().then(function(weather){
    $scope.weather = weather;
    console.log(weather)
})

weatherService.getCurrentLocation().then(function(location){
    $scope.location = location;
    console.log(location)
    $scope.lat = location.lat;
    $scope.lon = location.lon;
    console.log($scope.lat,$scope.lon)
})

weatherService.getBackground().then(function(pictures){
        $scope.pictures = pictures.url;
        // console.log(pictures);
    })



});