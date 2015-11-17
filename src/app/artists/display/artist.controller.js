angular.module('occ.artists')
  .controller('ArtistController', function (details, artistsService, toastr) {
    var vm = this;
    vm.details = details;

    vm.saveAsFavourite = function () {
      artistsService.addToFavourites(details)
        .then(function() {
          toastr.info(details.name + ' marked as favourite');
        });
    };
  });
