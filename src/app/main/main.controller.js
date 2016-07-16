(function () {
  'use strict';

  angular
    .module('fileUploadUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($injector, $scope, $log, Upload) {
    var vm = this;
    vm.fileToUpload = undefined;
    vm.upload = upload;
    //$scope.$digest();
    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1468584397083;
    // vm.showToastr = showToastr;

    activate();


    function activate() {

      // $injector.get('uploadFileSvc')
      //   .testService(1)
      //   .then(function (resp) {
      //     $injector.get('$log').log('res ' + resp);
      //     return $q.when(resp);
      //   })
      //   .then(function (resp) {
      //     return $injector.get('uploadFileSvc')
      //       .fileUpload({
      //         id: 1
      //       });

      //   })
      //   .then(function (resp) {
      //     $injector.get('$log').log('second res ' + resp);
      //   });
      // getWebDevTec();
      // $timeout(function() {
      //   vm.classAnimation = 'rubberBand';
      // }, 4000);
    }

    function upload() {
      $log.log(vm.fileToUpload);
      Upload.upload({
        url: '/api/upload-file',
        data: {
          file: vm.fileToUpload,
        }
      }).then(function (resp) {
        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      }, function (resp) {
        console.log('Error status: ' + resp.status);
      }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
      // $injector.get('uploadFileSvc')
      //   .fileUpload(vm.fileToUpload)
      //   .then(function (resp) {
      //     $injector.get('$log').log(resp);
      //   });
    }

    // function showToastr() {
    //     toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //     vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //     vm.awesomeThings = webDevTec.getTec();

    //     angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //         awesomeThing.rank = Math.random();
    //     });
    // }
  }
})();
