angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc){
$scope.test = 'test';
$scope.test1 = mainSvc.test1

mainSvc.getData().then(function(characters){
    $scope.characters = characters;
})

});