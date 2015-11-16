describe('ArtistsController', function () {
  var ctrl, http;

  beforeEach(module('occ.artists'));


  beforeEach(inject(function ($controller, $httpBackend) {
    http = $httpBackend;
    ctrl = $controller('ArtistsController', {});
  }));


  it('searches for artists', function () {
    ctrl.query = 'iron';
    http.whenGET('https://api.spotify.com/v1/search?q=iron&type=artist').respond(200, {
      artists: {
        items: ['iron maiden', 'iron man']
      }
    });

    ctrl.search();
    http.flush();

    expect(ctrl.list).toEqual(['iron maiden', 'iron man']);

  });

  it('searches for artists for other query', function () {
    ctrl.query = 'abba';
    http.whenGET('https://api.spotify.com/v1/search?q=abba&type=artist').respond(200, {
      artists: {
        items: ['abba']
      }
    });

    ctrl.search();
    http.flush();

    expect(ctrl.list).toEqual(['abba']);

  });

});
