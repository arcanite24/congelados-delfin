/**
 * MuchachoController
 *
 * @description :: Server-side logic for managing Muchachoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  getAuth: function (req, res) {
    var pin = req.param('id');
    Muchacho.findOne({pin: pin}).then(function (muchacho) {
      if (!muchacho) {
        return res.json({noAuth: true, msg: "Usuario no encontrado."});
      }
      return res.json(muchacho);
    }).catch(function (err) {
      return res.json(500, {err: "Error con el servidor..."});
    });
  }
	
};

