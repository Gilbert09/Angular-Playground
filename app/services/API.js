(function() {
    'use strict';

    angular
        .module('hs-app')
        .service('Api', Api);

    function Api($http) {
        return {
          get: get
        };

        function get(url) {
            return $http.get('https://api.github.com/users/slavomirvojacek/orgs' + url);
        }
    }
})();