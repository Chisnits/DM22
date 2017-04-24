angular.module('friendsList').controller('mainCtrl', function($scope){

$scope.name = 'Chase';

$scope.friends = ['Nate','Tanner', 'Harrison', 'Jamahl'];


$scope.addFriend = function(){
    var newFriend = $scope.friendInput;
     $scope.friends.push(newFriend);
        return $scope.friends;
};


});