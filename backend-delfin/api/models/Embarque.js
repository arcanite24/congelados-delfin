/**
 * Embarque.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    cliente: {
      model: 'cliente'
    },
    
    acciones: {
      collection: 'accion',
      via: 'embarque'
    },
    
    fechaEntrada: {
      type: 'date',
      required: true
    },
    
    fechaSalida: {
      type: 'date'
    },
    
    nombreProducto: {
      type: 'date',
      required: true
    },
    
    tipoEmpaquetado: {
      type: 'string',
      required: true
    },
    
    peso: {
      type: 'integer',
      required: true
    },
    
    tarifa: {
      type: 'integer',
      required: true
    }
    
  }
};

