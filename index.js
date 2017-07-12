var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
morgan = require('morgan'); //logger


var environment = process.argv[2] || process.env.NODE_ENV || 'dev'

if (environment != 'release' && environment != 'dev') {
  environment = 'dev';
}
//config load
var Configuracion = require("./lib/configuracion.js");
var configuracion = new Configuracion(environment);
var config = configuracion.LeerConfiguracion();


//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

//Autenticacion
var MiddleWare = require('./lib/security/authMiddleware.js');
var middleware = new MiddleWare(config);


//Models
var UserModel = require('./lib/models/users.js');
var userModel = new UserModel();
var ProductModel = require('./lib/models/products.js');
var productModel = new ProductModel();


//Config Express
app.use(allowCrossDomain);
app.use(morgan('combined'));
//Handles post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Handles put requests
app.use(methodOverride());


//Routes
require('./routes/products')(app, middleware,productModel);
require('./routes/auth')(app, middleware,userModel);

app.listen(config.app_port);
console.log('Express server started on port %s', config.app_port);
