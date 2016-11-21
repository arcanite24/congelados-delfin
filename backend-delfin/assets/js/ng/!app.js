var app = angular.module('congeladosApp', [
  'ngSails',
  'ngMaterial',
  'ui.router',
  'toastr',
  'ngAnimate',
  'mdDataTable'
]);

app.config(function($mdIconProvider, $mdThemingProvider) {
  $mdIconProvider.defaultIconSet('/mdi.svg');
  
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('amber');
});

app.config(function ($urlRouterProvider, $stateProvider) {
  
  $urlRouterProvider.otherwise('/index');
  
  $stateProvider
    .state('index', {url: '/index', templateUrl: 'templates/index.html', controller: 'MainCtrl'})
    .state('login', {url: '/login', templateUrl: 'templates/login.html', controller: 'LoginCtrl'})
    
    //Customers
    .state('addcustomer', {url: '/customers/add', templateUrl: 'templates/customers/add.html', controller: 'CustomersCtrl'})
    .state('listcustomer', {url: '/customers/list', templateUrl: 'templates/customers/list.html', controller: 'CustomersCtrl'})
    .state('historycustomer', {url: '/customers/history/:id', templateUrl: 'templates/customers/history.html', controller: 'CustomersCtrl'})
    
    //Embarques
    .state('embarquesdashboard', {url: '/embarques/dashboard/', templateUrl: 'templates/embarques/dashboard.html', controller: 'EmbarquesCtrl'})
  
    //Muchachos
    .state('add-muchacho', {url: '/muchachos/add/', templateUrl: 'templates/muchachos/add.html', controller: 'MuchachosCtrl'})
    .state('list-muchacho', {url: '/muchachos/list/', templateUrl: 'templates/muchachos/list.html', controller: 'MuchachosCtrl'})
  
});