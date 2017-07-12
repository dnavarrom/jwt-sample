var method = users.prototype;

var loki = require('lokijs'),
model,
db = new loki('db/users.db' , {
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true,
  autosaveInterval: 4000 // save every four seconds for our example
});



function users() {
  databaseInitialize();
};

function databaseInitialize() {
  // on the first load of (non-existent database), we will have no collections so we can
  //   detect the absence of our collections and add (and configure) them now.
  model = db.getCollection("users");
  if (model === null) {
    model = db.addCollection("users", {indices: ['username']});

    model.insert({
      _id : 'uuid23axxfaeweasd',
      username : 'diego',
      password : '123'
    });

    model.insert({
      _id : 'uuigasd223123xxvqwd',
      username : 'test',
      password : '123456'
    });

    db.saveDatabase();
  }
}



method.Validate = function (username, password) {

  if (model.find( {'username':username} ).password == password) {
    return true;
  } else {
    return false;
  }

}

module.exports = users;
