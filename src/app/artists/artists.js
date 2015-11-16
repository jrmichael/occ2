angular.module('occ.artists', [
  'ui.router'
])
  .config(function($stateProvider) {

    $stateProvider.state('artists', {
      parent: 'home',
      url: 'artists',
      templateUrl: 'app/artists/artists.html',
      controller: 'ArtistsController',
      controllerAs: 'artists'
    })
  })
  .controller('ArtistsController', function(artistsService) {

    var vm  = this;

    vm.search = function() {
      artistsService.search(vm.query)
        .then(function (results) {
          vm.list = results;
        });
    };

  });
