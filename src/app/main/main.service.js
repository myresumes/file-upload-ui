(function () {
  'use strict';

  angular
    .module('fileUploadUi')
    .factory('uploadFileSvc', factory);

  /* @ngInject */
  function factory($injector, $q) {
    var service = {
      testService: testService,
      fileUpload: fileUpload
    };
    return service;

    ////////////////

    function testService(req) {
      return $injector.get('$http')
        .get('api/test-api/' + req)
        .then(function (sResp) {
          if (sResp) {
            //  var response = _.has(sResp, 'data') ? sResp.data : {};/api/upload-file
            return $q.when(sResp.data);
          }
          $q.reject();
        }, function (error) {
          $q.reject();
        })
    }

    function fileUpload(req) {
      return $injector.get('$http')
        .post('/api/upload-file', {
          request: req
        })
        .then(function (sResp) {
          if (sResp) {
            return $q.when(sResp.data);
          }
          $q.reject();
        }, function (error) {
          $q.reject(error);
        })
    }
  }
})();
