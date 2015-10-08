(function() {
    'use strict';

    angular
        .module('hs-app')
        .controller('AboutUsController', AboutUsController);

    function AboutUsController(Api) {
        var vm = this;

        vm.currentSection = 'Company';

        vm.changeSection = function(section) {
            vm.currentSection = section;
        };

        vm.getData = function () {
            Api.get('').then(function(response) {
                vm.organisations = response.data;
            });
        }
    }
})();