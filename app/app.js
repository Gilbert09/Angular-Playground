(function() {
    'use strict';

    angular
        .module('hs-app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');

        $stateProvider
            .state('welcome', {
                url: '',
                templateUrl: 'app/sections/Welcome/layout.html'
            })
    }

    function run() {
        console.debug('HS App is now running');
    }
})();