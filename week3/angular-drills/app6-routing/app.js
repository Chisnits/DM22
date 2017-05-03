angular.module('routing',['ui.router'])
.config
    (function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home', {
            url: '/',
            template: "<h3>Home</h3>"
        })
        .state('signup', {
            url: '/signup',
            template: "<h3>Signup</h3>" 
        })
        .state('details', {
            url: '/details',
            templateUrl: './details.html',
            controller: 'mainCtrl'
        })
            $urlRouterProvider.when('','/');
    });