angular.module("myApp", [])

angular.module("myApp")
       .controller("mainCtrl", function($scope, $timeout){
 
   //Code
   $scope.greeting = "Hello DM22, Now we're cooking with peanut oil"
   
   $timeout(function(){
     $scope.greeting = "Magic!!~~!!~!~!~!"
   }, 3000)
   
   $scope.inputText = "Starting words"
   
   $scope.codeLanguages = [
     "javascript",
     "python",
     "html",
     "css",
     "ruby"
   ]
   
   $scope.clicked = function(){
     $scope.isAwesome = !$scope.isAwesome
   }
   
   $scope.isAwesome = false;
  $scope.isAdmin = true;
  
   $scope.messages = ["hello"]
   
   $scope.heroes = [
     {
       name: "Superman",
       powers: ["strong", "laser eyes", "creepy suit"],
       hasCape: true
     },
     {
       name: "Flash",
       powers: ["Very very super very fast"],
       hasCape: false
     },
     {
       name: "Batman",
       powers: ["Money", "Kung fu", "Sneaky"],
       hasCape: true
     },
     {
       name: "Deadpool",
       powers: ["Breaking 4th wall", "regen", "???"],
       hasCape: false
     },
     {
       name: "Luke Cage",
       powers: ["strong", "bulletproof"],
       hasCape: false
     }
   ]
})