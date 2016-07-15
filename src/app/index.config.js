(function() {
    'use strict';

    angular
        .module('fileUploadUi')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
        
        // $httpProvider.defaults.useXDomain = true;
        // $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }

})();
