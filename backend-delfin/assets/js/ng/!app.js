var app = angular.module('congeladosApp', [
  'ngSails',
  'ngMaterial',
  'ui.router'
]);

app.config(function ($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/index');
  
  $stateProvider
    .state('index', {url: '/index', templateUrl: 'templates/index.html', controller: 'MainCtrl'})
  
});