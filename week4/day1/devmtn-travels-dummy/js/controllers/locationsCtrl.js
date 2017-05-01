angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainSrv){
    $scope.travelInfo = mainSrv.travelInfo;
    

   

});