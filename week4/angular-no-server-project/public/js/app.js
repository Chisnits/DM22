// angular.module('weatherApp',[]);
var app = angular.module('weatherApp',['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
        })
        .state('fiveDayForecast', {
            url: '/',
            templateUrl: './views/fiveDayForecast.html',
        });
        
        $urlRouterProvider.when('','/');
        
        });