app.controller('ToolbarCtrl', function($scope, $state, $mdSidenav, $rootScope) {
  
  $rootScope.$state = $state;
  
  $rootScope.$on('$stateChangeSuccess', function (event) {
    if ($state.current.name != 'login') {
      if (!$rootScope.logeado) {
        $state.go('login');
      }
    }
  });

  $scope.abrirSidenav = function () {
    $mdSidenav('left').toggle();
  }

  $rootScope.rootLogout = function () {
    $rootScope.logeado = false;
    $rootScope.token = null;
    $rootScope._user = null;
    if ($mdSidenav('left').isOpen()) {
      $mdSidenav('left').toggle();
    }
    $state.go('login');
  }
});