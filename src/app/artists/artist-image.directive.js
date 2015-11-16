angular.module('occ.artists')
  .directive('artistImage', function () {
    return {
      restrict: 'E',
      template: '<img ng-src="{{ artistImageSource() }}">',
      scope: {
        artist: '='
      },
      link: function ($scope) {
        $scope.artistImageSource = function () {
          if ($scope.artist.images && $scope.artist.images.length > 0) {
            return $scope.artist.images[0].url;
          }
          return 'http://www.motothenw.com/wp-content/uploads/2015/05/placeholder-headshot.jpg';
        };
      }
    }
  });
