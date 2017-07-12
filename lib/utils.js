var method = utils.prototype;
var _ = require("underscore");

function utils() {
	
}

method.toBoolean = function(valor)
{
	if (_.isBoolean(valor)) {
		return valor;
	}

	if (valor == "true" || valor == "True" || valor == "TRUE") {
		return true;
	}
	else
	{
		return false;
	}

}

method.booleanToInt = function(valor)
{
	if (_.isBoolean(valor)) {

    	if (valor == "true" || valor == "True" || valor == "TRUE") {
    		return 1;
    	}
    	else
    	{
    		return 0;
    	}

	}

  return valor;

}

method.isBoolean = function(valor)
{
  if (_.isBoolean(valor)) {
		return true;
	}

	if (valor == "true" || valor == "True" || valor == "TRUE" || valor == "false" || valor == "False" || valor == "FALSE") {
		return true;
	}
	else
	{
		return false;
	}
}

method.splitToObject = function(valor, keys, separador)
{
  var arr;
  var obj;
  if (_.isString(valor)) {
      arr = valor.split(separador)
      for (i=0;i<arr.length;i++) {
        keys[i] = i+1;
      }
      obj = _.object(keys,arr);
      return obj;
  } else {
      return null;
  }
}

method.splitToArray = function(valor, keys, separador)
{
  var arr;
  if (_.isString(valor)) {
      arr = valor.split(separador)
      return arr;
  } else {
      return null;
  }
}

method.splitToArrayOfObjects = function(valor, keys, separador)
{
  var arr;
  if (_.isString(valor)) {
      arr = valor.split(separador)
      return arr;
  } else {
      return null;
  }
}

module.exports = utils;
