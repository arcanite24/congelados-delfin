app.controller('MuchachosCtrl', function ($scope, $rootScope, $state, $http, toastr) {
  
  $scope.generarPin = function (min, max) {
    return ("0" + (Math.floor(Math.random() * (max - min + 1)) + min)).substr(-4);
  }
  
  $scope.addMuchacho = function (muchacho) {
    //Generar PIN
    muchacho.pin = $scope.generarPin(0, 9999);
    console.log(muchacho)
    $http.post('/api/muchacho', muchacho).then(function (data) {
      toastr.success('Exito al agregar muchacho', '!Exito!');
      $state.go('list-muchacho');
    }).catch(function (err) {
      console.log(err)
    });
  }
  
  $scope.getAllMuchachos = function () {
    $http.get('/api/muchacho').then(function (data) {
      $scope.muchachos = data.data;
    }).catch(function (err) {
      toastr.error('Error al cargar muchachos...', '!Error!');
      $state.go('list-muchacho');
    });
  }
  
});