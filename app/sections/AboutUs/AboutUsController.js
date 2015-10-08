(function() {
    'use strict';

    angular
        .module('hs-app')
        .controller('AboutUsController', AboutUsController);

    function AboutUsController() {
        var vm = this;

        vm.currentSection = 'Company';

        vm.changeSection = function(section) {
            vm.currentSection = section;
        }
    }
})();