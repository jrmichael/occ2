angular.module('occ.artists')
  .service('artistsService', function ($http) {
    return {
      search: function (query) {

        return $http.get('https://api.spotify.com/v1/search', {
            params: {
              q: query,
              type: 'artist'
            }
          })
          .then(function (response) {
            return response.data.artists.items;
          });

      },

      get: function(artistId) {
        return $http.get('https://api.spotify.com/v1/artists/' + artistId)
          .then(function(response) {
            return response.data;
          });
      }
    }
  });
