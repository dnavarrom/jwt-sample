var method = configuracion.prototype;

var _environment;
var _ambienteCloud = false;

function configuracion(environment) {
	_environment = environment;

	if (process.env.CLOUD) {
		console.log("Configuracion : Cargo parametros desde variables de entorno o archivo .env");
		_ambienteCloud = true;
	}
	else
	{
		console.log("Configuracion : Cargo parametros desde archivo config.json");
	}

};


method.LeerConfiguracion = function() {

	var config;
	if (_ambienteCloud)
		config = CargarVariablesEntorno();

	else
		config = CargarDesdeArchivoConfig();

	return config;
}

function CargarVariablesEntorno() {
	_config =
	{
		 	  "app_host" : process.env.HOST,
		    "app_port" : process.env.PORT,
		    "seguridad" : {
					"habilitado" : process.env.SEGURIDAD_JWT_HABILITADO,
		    	"jwt" : {
		    		"TOKEN_SECRET_JWT" : process.env.SEGURIDAD_JWT_TOKEN_SECRET
		    	}
		    }
	};

	return _config;
}


function CargarDesdeArchivoConfig() {

	_config = require("../config.json")[_environment];
	return _config;

}


module.exports = configuracion;
