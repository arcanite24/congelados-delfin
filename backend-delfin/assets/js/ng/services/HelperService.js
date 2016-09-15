app.factory('$help', function (toastr, $mdDialog) {
  return {
    toast: function (text, type) {
      switch (type) {
        case 'success':
          toastr.success(text, {
            timeout: 1000
          });
          break;
          
        case 'error':
          toastr.error(text, {
            timeout: 1000
          });
          break;
        
        default:
          toastr.success(text, {
            timeout: 1000
          });
      }
      
    },
    
    modalSimple: function(template, controller) {
      $mdDialog.show({
        controller: controller,
        templateUrl: template,
        parent: angular.element(document.body),
        clickOutsideToClose: true
      });
    }
  };
});