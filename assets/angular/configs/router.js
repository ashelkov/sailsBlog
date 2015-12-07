'use strict';

/**
 * Config for the router
 */
app
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: true,
        controller: 'AppCtrl',
        templateUrl: 'angular/components/app/app.html'
      })
      .state('app.home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'angular/components/home/home.html'
      });

    $urlRouterProvider.otherwise('/');
  });