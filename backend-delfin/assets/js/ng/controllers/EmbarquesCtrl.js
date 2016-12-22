app.controller('EmbarquesCtrl', function ($scope, $state, $sails, $help, $http) {
  
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
        console.log('DATA new Embarque', data)
        data.pesoPromedio = Math.floor(data.peso / data.cantidadEmpaques);
        $sails.post('/api/embarque', data).then(function(data) {
          console.log('INFO: POST /api/embarque/', data.data);
          $help.toast('Embarque agregado correctamente.', 'success');
          $mdDialog.hide();
          $state.reload();
        }).catch(function(err) {
          console.log('ERROR: POST /api/embarque', err);
          $help.toast('Error al agregar nuevo embarque.', 'error');
        });
      }
    });
  }
  
  $scope.loadEmbarquesActivos = function () {
    $sails.get('/api/embarque/getActivos').then(function (data) {
      $scope.embarques = data.data;
    }).catch(function (err) {
      console.log('ERROR: /api/embarque/getActivos', err);
    });
  }
  
  $scope.loadHistorial = function() {
    $http.get('/api/embarque').then(function(data) {
      $scope.embarques = data.data;
    });
  };
  
  $scope.getNextCobro = function (embarque) {
    //Obtener fechas, fecha de cuando se metió y la fecha actual
    var startDate = new Date(Date.parse(embarque.createdAt));
    var todayDate = new Date();
    
    //Diferencial de los meses
    var dm = startDate.getMonth() - todayDate.getMonth();
    
    //Encontrar la fecha de cuando se tiene que pagar, fecha inicial mas la diferencia de meses, mas un mes
    startDate.setMonth(startDate.getMonth() + dm + 1);
    return startDate;
  }
  
  $scope.getMontoCobrar = function (embarque) {
    return embarque.tarifa * embarque.peso;
  }
  
  $scope.loadReporte = function(id) {
    $state.go('embarques-reporte', {id: id});
  };
  
  $scope.loadReporteUnico = function (id) {
    $state.go('embarques-reporte-unico', {id: id});
  }
  
  $scope.loadEmbarque = function() {
    var id = $state.params.id;
    $http.get('/api/embarque/' + id).then(function(data) {
      $scope.remesa = data.data;
      $http.get('/api/embarque/getHistorial/'+data.data.id).then(function(data2) {
        $scope.historialRemesa = data2.data;
      });
    });
  };
  
  $scope.loadAllPagos = function () {
    var id = $state.params.id;
    $http.get('/api/pago/getByRemesa/' + id).then(function (data) {
      $scope.pagos = data.data;
    }).catch(function (err) {
      console.log(err);
    })
  }
  
  $scope.loadPago = function () {
    var id = $state.params.id;
    $http.get('/api/pago/'+id).then(function(data) {
      $scope.pago = data.data;
    });
  }
  
  $scope.goToPago = function (id) {
    $state.go('pagos-ticket', {id: id});
  }
  
  
  $scope.goPagosList = function (id) {
    $state.go('embarques-pagos', {id: id});
  }  
  
  $scope.openRetirar = function (embarque) {
    $help.modalSimple('templates/dialogs/retirarEmbarque.html', function ($scope, $mdDialog, $sails, $state) {
      $scope.embarque = embarque;
      $scope.retirar = function (cantidad, id, canoriginal) {
        
        //Validar cantidad
        if (cantidad > canoriginal) {
          $help.toast('Ingresa una cantidad menor a la cantidad total.', 'error');
          return;
        } else if (cantidad == canoriginal) {
          $help.toast('Si quieres retirar todo el embarque, utiliza FINALIZAR.', 'error');
          return;
        }
        
        var cantidadFinal = canoriginal - cantidad;
        
        $sails.post('/api/embarque/retirar', {id: id, cantidad: cantidadFinal}).then(function (data) {
          $help.toast('Cantidad retirada correctamente.', 'success');
          $mdDialog.hide();
          $state.reload();
        }).catch(function (err) {
          $help.toast('Error con el servidor.', 'error');
          console.log('ERROR /api/embarque/retirar', err);
        });
      }
    });
  }
  
});