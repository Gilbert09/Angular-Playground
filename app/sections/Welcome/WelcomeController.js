(function() {
    'use strict';

    angular
        .module('hs-app')
        .controller('WelcomeController', WelcomeController);

    function WelcomeController() {
        var vm = this;

        vm.title = 'Heeelsd;gkjdskx dsj';

        vm.changeTitle = function() {
            vm.title = "LOLz";
        }
    }
})();