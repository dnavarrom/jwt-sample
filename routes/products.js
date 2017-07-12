module.exports = function(app, securityMiddleware, productModel) {

  /**
   * @api {get} /v1/products Get all products
   * @apiGroup Products|
   * @apiSuccess {json} List Products
   * @apiVersion 0.0.1
   * @apiName Get Products
   * @apiDescription Product list
   */
  app.get('/api/v1/products', securityMiddleware.EnsureAuthenticated, function(request, response){

    response.json(productModel.Model().find());

  });

}
