app.controller('CustomersCtrl', function ($scope, $sails, $help, $rootScope){
  
  $scope.addCustomer = function (name) {
    $sails.post('/api/cliente', {name: name}).then(function (data) {
      $help.toast('Cliente ' + data.data.name  + ' agregado correctamente.', 'success');
      $scope.newCustomerData = null;
    }).catch(function (err) {
      $help.toast('Error al agregar cliente.', 'error');
    });
  }
  
  $scope.getCustomers = function () {
    $sails.get('/api/cliente').then(function (data) {
      $scope.clientes = data.data;
    }).catch(function (err) {
      console.log('ERROR: GET /api/cliente', err);
    });
  }
  
  $scope.editCustomerTable = function (data) {
    console.log('INFO: editCustomerTable', data);
  }
  
  $scope.openRemoveDialog = function (customer) {
    $help.modalSimple('templates/dialogs/removeCustomer.html', function ($scope, $sails, $mdDialog, $state) {
      $scope.customer = customer;
      $scope.close = function () {
        $mdDialog.hide();
      }
      $scope.removeCustomer = function (id) {
        $sails.delete('/api/cliente/'+id).then(function (data) {
          console.log('INFO: /api/cliente REMOVE', data);
          $state.reload();
          $help.toast('Cliente borrado correctamente.', 'success');
          $mdDialog.hide();
        }).catch(function (err) {
          console.log('ERROR: DELETE /api/cliente/', err);
          $help.toast('¡Error! Falló eliminar al cliente.', 'error');
        })
      }
    });
  }
  
  $scope.openEditDialog = function (customer) {
    $help.modalSimple('templates/dialogs/editCustomer.html', function ($scope, $sails, $mdDialog, $state) {
      $scope.customer = customer;
      $scope.close = function () {
        $mdDialog.hide();
      }
      $scope.editCustomer = function (customer) {
        $sails.put('/api/cliente/'+customer.id, customer).then(function(data) {
          console.log('INFO: /api/cliente PUT', data);
          $state.reload();
          $help.toast('Cliente editado correctamente.', 'success');
          $mdDialog.hide();
        }).catch(function (err) {
          $help.toast('¡Error! Falló editar al cliente', 'error');
        });
      }
    });
  }
  
});