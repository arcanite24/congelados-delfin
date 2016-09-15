app.controller('LoginCtrl', function($scope, $state, $sails, $rootScope, $help) {

  //Si está logeado va al dashboard
  if ($rootScope._user) {
    $state.go('index');
  }
  
  $scope.login = function (datos) {
    $sails.post('/api/user/login', {
      username: datos.username, 
      password: datos.password
    }).then(function(data) {
      console.log('INFO: /api/user/login', data);
      if (data.data.token) {
        //Si se pudo logear
        $rootScope._user = data.data.user;
        $rootScope.token = data.data.token;
        $rootScope.logeado = true;
        $help.toast('Sesión iniciada correctamente.', 'success');
        $state.go('index');
      } else if (data.data.err) {
        //Contraseñas no coinciden o usuario no encontrado
        console.log('ERROR: /api/user/login', data.data.err);
        $help.toast('Datos de inicio de sesión incorrectos.', 'error');
      }
    }).catch(function (err) {
      //Error con el servidor
      console.log('ERROR: /api/user/login', err);
      $help.toast('Datos de inicio de sesión incorrectos.', 'error');
    })
  }
  
});