angular.module('unsplash').service('mainSvc', function($http){
    var baseUrl = "https://unsplash.it/200/300/?random";
    this.getData = function(){
        return $http({
            method: 'GET',
            url: baseUrl
    }).then(function(response){
        // console.log(response.config.url)
        if(response.status === 200){
            console.log(response.config.url)
            return response.config
        }
            return "Something Went Wrong"
        })
    }
});