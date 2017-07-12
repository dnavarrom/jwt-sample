var method = jwtService.prototype;

var jwt = require('jwt-simple');
var moment = require('moment');
var _config;

function jwtService(config) {
	_config = config;
}


method.CrearToken = function(user) {
	var payload = {
    sub: user,
    iat: moment().unix(),
    exp: moment().add(10, "minutes").unix(),
  };

  return jwt.encode(payload, _config.seguridad.jwt.TOKEN_SECRET);
};

method.DecodificarToken = function(token) {

	return jwt.decode(token, _config.seguridad.jwt.TOKEN_SECRET);

};



module.exports = jwtService;
