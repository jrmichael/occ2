angular.module('occ.artists')
  .controller('ArtistsController', function (artistsService) {

    var vm = this;

    vm.search = function () {
      artistsService.search(vm.query)
        .then(function (results) {
          vm.list = results;
        });
    };

  });

