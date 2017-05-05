angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService){
    $scope.lat;
    $scope.lon;
    $scope.showView = false;

weatherService.getCurrentLocation().then(function(location){
    $scope.location = location;
    console.log(location)
    $scope.lat = location.lat;
    $scope.lon = location.lon;
    
    console.log($scope.lat,$scope.lon)
    weatherService.getWeather($scope.lat, $scope.lon).then(function(weather){
        $scope.weather = weather;
        console.log(weather)
    })
});




weatherService.getBackground().then(function(pictures){
        $scope.showView = true;
        $scope.pictures = pictures.url;
        // console.log(pictures);
    })



});