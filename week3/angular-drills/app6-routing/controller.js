angular.module('routing').controller('mainCtrl', function($scope, mainSvc){
    mainSvc.getData().then(function(characters){
        $scope.characters = characters;
    })


});