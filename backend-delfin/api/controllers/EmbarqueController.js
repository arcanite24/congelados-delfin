/**
 * EmbarqueController
 *
 * @description :: Server-side logic for managing Embarques
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getActivos: function (req, res) {
	  Embarque.find({status: 'STATUS_ACTIVO'}).populateAll().then(function (data) {
	  	return res.json(data);
	  }).catch(function (err) {
	  	console.log('ERROR: getActivos', err);
	  	return res.json(500, []);
	  });
	},
	
	retirar: function(req, res) {
		var id = req.param('id');
		var cantidad = req.param('cantidad');
		var peso = req.param('peso');
		Embarque.update({id: id}, {cantidadEmpaques: cantidad, peso: peso}).then(function (dataEmbarque) {
			return res.json(dataEmbarque);
		}).catch(function (err) {
			return res.json(500, {err: err});
		});
	},
	
	getHistorial: function (req, res) {
		var id = req.param('id');
		Accion.find({embarque: id}).populateAll().then(function (data) {
			return res.json(data);
		}).catch(function (err) {
			return res.json({err: err});
		});
	}
	
};

