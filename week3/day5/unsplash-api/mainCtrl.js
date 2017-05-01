angular.module('unsplash').controller('mainCtrl', function($scope, mainSvc){
    
    mainSvc.getData().then(function(pictures){
        $scope.pictures = pictures.url;
        console.log(pictures);
    })
});