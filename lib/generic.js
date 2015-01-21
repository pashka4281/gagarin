var genericPromiseChain = require('./genericPromiseChain');
var Promise = require('es6-promise').Promise;
var either  = require('./tools').either;

module.exports = function generic(methods, myPrototype) {

  var GenericPromiseChain = genericPromiseChain(methods, myPrototype);

  function Generic (operand) {
    "use strict";

    this._operand = operand;
  }

  Generic.prototype = Object.create(myPrototype);

  GenericPromiseChain.prototype.methods.forEach(function (name) {
    "use strict";

    Generic.prototype[name] = function () {
      var chain = new GenericPromiseChain(this._operand);
      return chain[name].apply(chain, arguments);
    };

  });

  return Generic;

}
