(function() {
  'use strict';

  angular
    .module('fileUploadUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
