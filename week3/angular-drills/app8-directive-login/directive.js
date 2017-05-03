angular.module('app').directive('mainDirective', function(){
    return {
        restrict: 'AE',
        templateUrl: 'loginTmpl.html',
        controller: function($scope){
            $scope.alertInfo = function(loginInfo){
                alert(loginInfo);
                console.log(loginInfo)
            }
        }
    }

});