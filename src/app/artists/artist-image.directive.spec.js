describe('artistImage directive', function () {
  var scope, compile;

  beforeEach(module('occ.artists'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('shows img with src', function () {
    scope.candidate = {
      images: [{url: 'artistUrl'}]
    };

    var element = compile('<artist-image artist="candidate"></artist-image>')(scope);
    scope.$apply();

    var img = element.find('img');

    expect(img.attr('src')).toEqual('artistUrl')
  });

  it('does not fail when no images', function () {
    scope.candidate = {};

    var element = compile('<artist-image artist="candidate"></artist-image>')(scope);
    scope.$apply();

    var img = element.find('img');

    expect(img.attr('src')).toEqual('http://www.motothenw.com/wp-content/uploads/2015/05/placeholder-headshot.jpg')

  });

});
