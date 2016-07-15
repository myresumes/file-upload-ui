(function () {
  'use strict';

  angular
    .module('fileUploadUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($injector, $q) {
    var vm = this;

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1468584397083;
    // vm.showToastr = showToastr;

    activate();

    function activate() {
      $injector.get('uploadFileSvc')
        .testService(1)
        .then(function (resp) {
          $injector.get('$log').log('res ' + resp);
          return $q.when(resp);
        })
        .then(function (resp) {
          return $injector.get('uploadFileSvc')
            .fileUpload({
              id: 1
            });

        })
        .then(function (resp) {
          $injector.get('$log').log('second res ' + resp);
        });
      // getWebDevTec();
      // $timeout(function() {
      //   vm.classAnimation = 'rubberBand';
      // }, 4000);
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
