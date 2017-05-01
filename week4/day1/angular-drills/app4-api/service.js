angular.module('apiApp').service('mainSvc', function($http){
this.test1 = 'test';

var baseUrl = 'http://swapi.co/api';
this.getData = function(character){
    return $http({
        method: 'GET',
        url: baseUrl + '/people'
    }).then(function(response){
        if(response.status === 200){
            return response.data.results
        }
            return "Something Went Wrong"
    })
}

});