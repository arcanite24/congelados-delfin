var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

module.exports = {
  
	register: function (req, res) {
		var params = req.allParams();
		User.create(params).then(function (data) {
			console.log('INFO: User Created', data);
			return res.json(data);
		}).catch(function(err) {
			console.log('ERROR: Erro al crear usuario', err);
		});
	},

	login: function (req, res) {
		var username = req.param('username');
		var password = req.param('password');
		User.findOne({username: username}).then(function(data) {
		  if (data) {
				bcrypt.compare(password, data.password, function (err, respuesta_compare) {
					if (respuesta_compare) {
						var token = jwt.sign(data, sails.config.seguridad.secretJWT);
						return res.json({token: token, user: data});
					} else if (err) {
						console.log(err);
						return res.json({err: true, message: 'Error, las contraseñas no coinciden.'});
					} else {
						return res.json(500, {err: err, message: 'Error con el servidor.'});
					}
				});
		  } else {
				return res.json({err: true, message: 'Usuario no encontrado.'});
			}
		}).catch(function(err) {
			console.log(err);
		  return res.json(500, {err: err});
		});
	}
	
};