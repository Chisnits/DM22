angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc){
$scope.test = 'test';
    mainSvc.getData1().then(function(characters){
        $scope.characters = characters;
    })
    mainSvc.getData2().then(function(planets){
        $scope.planets = planets;
    })
    mainSvc.getPokemon().then(function(pokemon){
        $scope.pokemon = pokemon;
    })
    


});