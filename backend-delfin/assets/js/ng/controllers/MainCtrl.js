app.controller('MainCtrl', function ($scope, $sails, $help) {
  
  $scope.getClientesActivos = function () {
    $sails.get('/api/cliente').then(function (data) {
      $scope.clientesActivos = data.data;
    }).catch(function (err) {
      console.log('ERROR: /api/cliente/ GET', err);
    });
  }
  
  $scope.getProximosPagos = function () {
    $sails.get('/api/embarque/getActivos').then(function (data) {
      $scope.proximosPagos = data.data;
    }).catch(function (err) {
      console.log('ERROR: /api/embarque/ GET', err);
    });
  }
  
  $scope.getFechaPago = function (fechaInicial) {
    var startDate = new Date(Date.parse(fechaInicial));
    var todayDate = new Date();
    var dm = startDate.getMonth() - todayDate.getMonth();
    startDate.setMonth(startDate.getMonth() + dm + 1);
    return startDate;
  }
  
});