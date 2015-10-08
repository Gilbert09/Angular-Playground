(function() {
    'use strict';

    angular
        .module('hs-app')
        .directive('removeFromList', RemoveFromList);

    function RemoveFromList() {
        return {
            restrict: 'A',
            link: link
        };
    }

    function link(scope, ele, attr) {
        scope.shown = false;

        scope.toggleId = function() {
            scope.shown = !scope.shown;
        }
    }
})();