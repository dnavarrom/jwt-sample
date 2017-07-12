var method = products.prototype;

var loki = require('lokijs'),
model,
db = new loki('db/products.db' , {
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true,
  autosaveInterval: 4000 // save every four seconds for our example
});


function products() {
  databaseInitialize();
};

function databaseInitialize() {
  // on the first load of (non-existent database), we will have no collections so we can
  //   detect the absence of our collections and add (and configure) them now.
  model = db.getCollection("products");
  if (model === null) {
    model = db.addCollection("products", {indices: ['id']});



    model.insert({
      _id : '123aa231ssd',
      description : "product 1",
      sku : "144223",
      ean : "222333333",
      enabled : "true"
    });

    model.insert({
      _id : "124asd123sfas",
      description : "product 2",
      sku : "14223123",
      ean : "334242433",
      enabled : "true"
    });


    model.insert({
      _id : "123512aqdfasdw",
      description : "product 3",
      sku : "1455566",
      ean : "22211122233",
      enabled : "true"
    });

    db.saveDatabase();
  }
}

method.Model = function() {
  return model;
}


module.exports = products;
