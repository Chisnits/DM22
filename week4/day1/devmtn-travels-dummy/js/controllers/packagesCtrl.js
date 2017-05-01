angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv){
    $scope.packageInfo = mainSrv.packageInfo;
    $scope.country = $stateParams.country;
    console.log($stateParams.country)
});