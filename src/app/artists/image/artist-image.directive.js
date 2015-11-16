angular.module('occ.artists')
  .directive('artistImage', function () {
    return {
      restrict: 'E',
      template: '<img ng-src="{{ image.source() }}">',
      scope: {},
      bindToController: {
        artist: '='
      },
      controllerAs: 'image',
      controller: function () {
        var vm = this;
        vm.source = function () {
          if (vm.artist.images && vm.artist.images.length > 0) {
            return vm.artist.images[0].url;
          }
          return 'http://www.motothenw.com/wp-content/uploads/2015/05/placeholder-headshot.jpg';
        };
      }

    }
  });
