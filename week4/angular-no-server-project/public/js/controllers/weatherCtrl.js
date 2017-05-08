angular.module('weatherApp').controller('weatherCtrl', function($scope, weatherService, pic){
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
        var currentWeather = weatherObj.main;
        $scope.currentWeather = currentWeather;
        var iconBaseUrl = 'http://openweathermap.org/img/w/'
        var weatherIcon = weatherObj.icon;
        $scope.weatherIcon = iconBaseUrl + weatherIcon + ".png"
        console.log($scope.weatherIcon)

        
    }) 
    //    $scope.getIconImageUrl = function(iconName) {
    //   return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    // };
});







});