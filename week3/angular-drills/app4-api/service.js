angular.module('apiApp').service('mainSvc', function($http){
    var baseUrl = "http://swapi.co/api";
    this.getData1 = function(character){
        return $http({
            method: 'GET',
            url: baseUrl + '/people'
    }).then(function(response){
        console.log(response.data.results)
        if(response.status === 200){
            return response.data.results
        }
            return "Something Went Wrong"
        })
    }

    this.getData2 = function(planet){
        return $http({
            method: 'GET',
            url: baseUrl + '/planets'
    }).then(function(response){
        console.log(response.data.results)
        if(response.status === 200){
            return response.data.results
        }
            return "Something Went Wrong"
        })
    }
    this.getPokemon = function(){
        pokemonUrl = 'http://pokeapi.co/api/v2/'
        return $http({
            method: 'GET',
            url: pokemonUrl + 'pokemon'
        }).then(function(response){
        console.log(response.data.results)
        if(response.status === 200){
            return response.data.results
        }
            return "Something Went Wrong"
        })
    }
});