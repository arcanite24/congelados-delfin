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
    
    fechaSalida: {
      type: 'date'
    },
    
    nombreProducto: {
      type: 'string',
      required: true
    },
    
    tipoEmpaquetado: {
      type: 'string',
      required: true
    },
    
    cantidadEmpaques: {
      type: 'integer',
      required: true
    },
    
    peso: {
      type: 'integer',
      required: true
    },
    
    tarifa: {
      type: 'float',
      required: true
    },
    
    estancia: {
      type: 'integer',
      enum: [1,2,3,4]
    },
    
    status: {
      type: 'string',
      enum: ['STATUS_ACTIVO', 'STATUS_INACTIVO'],
      defaultsTo: 'STATUS_ACTIVO'
    }
    
  }
};

