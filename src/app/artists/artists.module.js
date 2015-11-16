angular.module('occ.artists', [
    'ui.router'
  ])
  .config(function ($stateProvider) {

    $stateProvider.state('artists', {
      parent: 'home',
      url: 'artists',
      templateUrl: 'app/artists/list/artists.html',
      controller: 'ArtistsController',
      controllerAs: 'artists'
    });

    $stateProvider.state('artist', {
      parent: 'home',
      url: 'artists/{artistId}',
      templateUrl: 'app/artists/display/artist.html',
      controller: 'ArtistController',
      controllerAs: 'artist',
      resolve: {
        details: function(artistsService, $stateParams) {
          return artistsService.get($stateParams.artistId);
        }
      }

    })
  });
