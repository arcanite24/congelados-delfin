/**
 * PagoController
 *
 * @description :: Server-side logic for managing Pagoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getByRemesa: function (req, res) {
	  var id = req.param('id');
	  Pago.find({remesa: id}).then(function (data) {
	    return res.json(data);
	  }).catch(function (err) {
	    return res.json([]);
	  });
	}
	
};

