angular.module('occ.artists')
  .controller('FavouritesController', function (favouriteArtists, artistsService, $state) {
    var vm = this;

    vm.list = favouriteArtists;

    vm.remove = function(artist) {
      artistsService.removeFavourite(artist)
        .then(function() {
          $state.reload();
        });
    };
  });
