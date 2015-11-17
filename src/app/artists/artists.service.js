angular.module('occ.artists')
  .service('artistsService', function ($http) {

    function getData(response) {
      return response.data;
    }

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

      get: function (artistId) {
        return $http.get('https://api.spotify.com/v1/artists/' + artistId)
          .then(getData);
      },

      addToFavourites: function (artist) {
        return $http.post('http://localhost:8080/', artist);
      },

      favourites: function () {
        return $http.get('http://localhost:8080/')
          .then(getData);
      },

      removeFavourite: function(artist) {
        return $http.delete('http://localhost:8080/' + artist.id);
      }
  }
  });
