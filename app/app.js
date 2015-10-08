(function() {
    'use strict';

    angular
        .module('hs-app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('welcome', {
                url: '/',
                templateUrl: 'app/sections/Welcome/layout.html',
                controller: 'WelcomeController',
                controllerAs: 'WelcomeCtr'
            })
            .state('about-us', {
                url: '/about-us',
                templateUrl: 'app/sections/AboutUs/layout.html',
                controller: 'AboutUsController',
                controllerAs: 'AboutUsCtr'
            });

        $locationProvider.html5Mode(true);
    }

    function run() {
        console.debug('HS App is now running');
    }
})();