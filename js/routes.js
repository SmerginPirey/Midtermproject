angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('homeScreen', {
    url: '/homepage',
    templateUrl: 'templates/homeScreen.html',
    controller: 'homeScreenCtrl'
  })

  .state('options', {
    url: '/statpage',
    templateUrl: 'templates/options.html',
    controller: 'optionsCtrl'
  })

  .state('deviceSales', {
    url: '/devicesales',
    templateUrl: 'templates/deviceSales.html',
    controller: 'deviceSalesCtrl'
  })

  .state('marketShare', {
    url: '/',
    templateUrl: 'templates/marketShare.html',
    controller: 'marketShareCtrl'
  })

  .state('appDownload', {
    url: '/page13',
    templateUrl: 'templates/appDownload.html',
    controller: 'appDownloadCtrl'
  })

  .state('availableApp', {
    url: '/page14',
    templateUrl: 'templates/availableApp.html',
    controller: 'availableAppCtrl'
  })

$urlRouterProvider.otherwise('/homepage')

  

});