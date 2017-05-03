angular.module('app').directive('mainDirective', function($window){
    return{
        restrict: 'AE',
        link: function(scope, element, attribute){
                 element.on('click',function(){
                    if (!$window.getSelection().toString()) {
                    this.setSelectionRange(0, this.value.length)
                }
                 });
        }
    }
});