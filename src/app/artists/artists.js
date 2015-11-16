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
  .controller('ArtistsController', function($http) {

    var vm  = this;

    vm.search = function() {
      $http.get('https://api.spotify.com/v1/search', {
        params: {
          q: vm.query,
          type: 'artist'
        }
      })
        .then(function (response) {
          vm.list = response.data.artists.items;
        });
    };

  });
