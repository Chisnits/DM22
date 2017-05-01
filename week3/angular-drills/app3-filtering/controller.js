angular.module('filterApp').controller('mainCtrl', function($scope, mainSvc){
    $scope.something = 'something cool'

    $scope.employees = mainSvc.getData();
});