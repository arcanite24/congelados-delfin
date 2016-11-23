/**
 * Accion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  
    embarque: {
      model: 'embarque'
    },
    
    tipo: {
      type: 'string',
      enum: ['entrada', 'salida', 'pago', 'retiro', 'cambioTarifa', 'cambioEstancia', 'finalizar']
    },
    
    muchacho: {
      model: 'muchacho'
    }
  
  }
};

