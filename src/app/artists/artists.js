angular.module('occ.artists', [
  'ui.router'
])
  .config(function($stateProvider) {

    $stateProvider.state('artists', {
      parent: 'home',
      url: 'artists',
      templateUrl: 'app/artists/artists.html'
    })
  });
