angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv){
    
    var packageInfo = mainSrv.packageInfo;
    
    for (var i = 0; i < packageInfo.length; i++) {
    for (var key in packageInfo[i]) {
      if ($stateParams.id == packageInfo[i][key]) {
        $scope.background = {
          "background-image": "url(" + packageInfo[i].image +")",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        };
        $scope.city = packageInfo[i].city;
      }
    }
  }
    
});