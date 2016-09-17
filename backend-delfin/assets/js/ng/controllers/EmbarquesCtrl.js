app.controller('EmbarquesCtrl', function ($scope, $state, $sails, $help) {
  
  $scope.openNewEmbarque = function () {
    $help.modalSimple('templates/dialogs/newEmbarque.html', function($scope, $sails, $mdDialog) {
      $scope.initCustomers = function () {
        $sails.get('/api/cliente').then(function (data) {
          console.log(data);
          $scope.customers = data.data;
        }).catch(function(err) {
          console.log('ERROR: GET /api/cliente/', err);
        });
      }
      $scope.close = function () {
        $mdDialog.hide();
      }
      $scope.addNewEmbarque = function (data) {
        $sails.post('/api/embarque', data).then(function(data) {
          console.log('INFO: POST /api/embarque/', data.data);
          $help.toast('Embarque agregado correctamente.', 'success');
          $state.reload();
        }).catch(function(err) {
          console.log('ERROR: POST /api/embarque', err);
          $help.toast('Error al agregar nuevo embarque.', 'error');
        });
      }
    });
  }
  
});