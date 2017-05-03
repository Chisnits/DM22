angular.module('myApp').directive('mainDirective', function(){
    return{
        restrict: 'AE',
        templateUrl: './directiveTmpl.html'
    }
})