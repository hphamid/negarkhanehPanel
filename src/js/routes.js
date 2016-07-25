'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('NegarKhanehPanel').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/main/new');

        // Application routes
        $stateProvider.state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'templates/main.html',
                controller: 'MasterCtrl'
            })
            .state('main.new', {
                url: '/new',
                templateUrl: 'templates/imageList.html',
                controller: 'NewImagesCtrl'
            })
            .state('main.popular', {
                url: '/popular',
                templateUrl: 'templates/imageList.html',
                controller: 'PopularImagesCtrl'
            }).state('main.notReleased', {
            url: '/notreleased',
            templateUrl: 'templates/imageList.html',
            controller: 'NotReleasedImagesCtrl'
        }).state('main.image', {
            url: '/image/:imageId',
            templateUrl: 'templates/imagePage.html',
            controller: 'ImagePageCtrl'
        }).state('main.newImage', {
            url: '/upload',
            templateUrl: 'templates/newImage.html',
            controller: 'NewImageCtrl'
        });

    }
]);
