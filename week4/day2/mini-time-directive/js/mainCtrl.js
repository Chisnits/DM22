angular.module('time').controller('mainCtrl', function($scope){
$scope.name = 'Chase';


$scope.alerter = function(text){
    alert(text)
}

$scope.logger = function(text){
    console.log(text)
}

});