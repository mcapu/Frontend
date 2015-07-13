(function() {
  'use strict';

  angular.module('teamplay').config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('lobbies', {
        url: '/',
        templateUrl: 'app/components/lobbies/lobbies.html',
        controller: 'LobbiesController',
        controllerAs: 'lobbies'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
