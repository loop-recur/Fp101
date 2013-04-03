var Promise = require('../node-promise/promise').Promise;
var p = new Promise();

Functor(p.constructor, {
  fmap: function(f) {
    var promise = new Promise();
    this.then(function(response){
      promise.resolve(f(response));
    });
    return promise;
  }
});

Monad(p.constructor, {
  mjoin: function() {
    return this; // doesn't actually nest.
  }
});

module.exports = Promise;
