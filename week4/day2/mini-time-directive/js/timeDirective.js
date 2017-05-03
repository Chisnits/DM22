angular.module('time').directive('timeDirective', function(){
    return{
        restrict: 'E',
        templateUrl: '<div>The current time is {{time}}</div>',
        link: function(scope, element, attribute){
            var currentTime = new Date();
            scope.time = currentTime.toString();
        }
    }



});