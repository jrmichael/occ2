(function() {
  'use strict';

  angular
    .module('occ')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
