
module.exports = function(app, securityMiddleware, userModel){

  //Por defecto
app.get('/', securityMiddleware.EnsureAuthenticated, function(request, response){
  response.json('go to /api/v1/products');
});

/**
 * @api {get} /api/v1/auth/login Get all products
 * @apiGroup Auth
 * @apiSuccess {json} Token jwt token
 * @apiVersion 0.0.1
 * @apiName Login
 * @apiDescription Username and password login, expiration time: 30 minutes
 */
app.post('/api/v1/auth/login', function(req,res) {

  var isValid = userModel.Validate(req.body.userName, req.body.password);

  if (isValid) {
    res.status(200).send({token: securityMiddleware.CrearToken(req.body.userName)});
  }
  else {
    res.status(401).send({message: "No autorizado"});
  }

});


};
