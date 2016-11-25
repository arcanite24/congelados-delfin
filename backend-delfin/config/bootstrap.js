/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  //No toques nada de aquí XD
  
  User.findOrCreate({username: 'admin'}, {username: 'admin', password: '123', name: 'Administrador'}).then(function (data) {
    console.log('INFO: Usuario admin encontrado o creado');
  }).catch(function (err) {
    console.log('ERROR: bootstrap.js - Crear admin', err);
  });
  
  User.findOrCreate({username: 'restdelfines_admin'}, {username: 'restdelfines_admin', password: 'cacr2205', name: 'Administrador'}).then(function (data) {
    console.log('INFO: Usuario admin encontrado o creado');
  }).catch(function (err) {
    console.log('ERROR: bootstrap.js - Crear admin', err);
  });
  
  cb();
};
