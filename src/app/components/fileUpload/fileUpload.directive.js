(function () {
  'use strict';

  angular
    .module('fileUploadUi')
    .directive('fileUploadDir', fileUploadDir);

  /* @ngInject */
  function fileUploadDir() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      controller: function ($scope) {
        $scope.uploadFile = undefined;
        $scope.$watch('uploadFile', function (newValue) {
          if (angular.isDefined(newValue)) {
            $log.log(newValue);
            // validateAndUpload(newValue).then(function (result) {
            //   if (_.size(result) > 0 && _.has(result, 'status')) {
            //     $scope.fileNames.push({
            //       name: result.name,
            //       filePath: result.filePath,
            //       size: humanFileSize(newValue.size)
            //     });
            //     $scope.filePath.push(result.filePath);
            //   }
            // });

          }
        });
      },
      link: link,
      restrict: 'E',
      templateUrl: 'app/components/fileUpload/fileUpload.html'
    };
    return directive;

    function link(scope, element, attrs) {}
  }

  // /* @ngInject */
// function Controller() {

// }

})();
