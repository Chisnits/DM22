angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv){
    $scope.packageInfo = mainSrv.packageInfo;
});