(function () {
    'use strict';

    angular
        .module('throttlePageState', [
            'ui.router',
            'ngAnimate'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('throttle_page', {
                    cache: false,
                    url: '/throttle_page',
                    templateUrl: 'js/states/throttle-page/throttle.page.html',
                    controller: 'throttleController as vm'
                })
        });
})();