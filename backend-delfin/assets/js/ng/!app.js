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
    .state('embarques-historial', {url: '/embarques/historial/', templateUrl: 'templates/embarques/historial.html', controller: 'EmbarquesCtrl'})
    .state('embarques-reporte', {url: '/embarques/reporte/:id', templateUrl: 'templates/embarques/reporte.html', controller: 'EmbarquesCtrl'})
    .state('embarques-reporte-unico', {url: '/embarques/reporteunico/:id', templateUrl:'templates/embarques/reporte-unico.html', controller: 'EmbarquesCtrl'})
    .state('embarques-pagos', {url: '/embarques/pagos/:id', templateUrl: 'templates/embarques/pagos.html', controller: 'EmbarquesCtrl'})
    .state('pagos-ticket', {url: '/pagos/ticket/:id', templateUrl: 'templates/embarques/ticket-pago.html', controller: 'EmbarquesCtrl'})
  
    //Muchachos
    .state('add-muchacho', {url: '/muchachos/add/', templateUrl: 'templates/muchachos/add.html', controller: 'MuchachosCtrl'})
    .state('list-muchacho', {url: '/muchachos/list/', templateUrl: 'templates/muchachos/list.html', controller: 'MuchachosCtrl'})
  
});

