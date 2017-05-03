angular.module('app').directive('mainDirective', function(){
    return{
        restrict: 'E',
        template: "<img ng-src='{{imgUrl}}' />",
        scope: {
            imgUrl: '@'
        }
    }
})