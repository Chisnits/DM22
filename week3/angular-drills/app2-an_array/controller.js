angular.module('arrayApp').controller('arrayController', function($scope,mainSvc){
$scope.test = 'cool beans';


$scope.employees = mainSvc.getData();

});