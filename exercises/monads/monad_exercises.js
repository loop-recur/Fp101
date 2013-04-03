require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');
var fs = require('../../support/node-promise/fs-promise');

module.exports = function(){
  
  //+ _get :: a -> Maybe(a)
  var _get = function(key, obj) {
    return Maybe(obj[key]);
  }.autoCurry();
  
    
  // Exercise 1:
  // ============
  
  //+ firstStreet :: Person -> Maybe(String)
  var firstStreet = compose(mjoin,
                            fmap(_get('street')),
                            mjoin,
                            fmap(_get(0)),
                            _get('addresses'));

  
  // Exercise 2:
  // ============
  
  //+ uploadFileContents :: String -> Promise(Response)
  var uploadFileContents = compose(fmap(Http.upload),
                                   fmap(compose(take(7), String)),
                                   fs.readFile);
  
  // Exercise 3:
  // ============
  // Refactor saveUser
  
  var _validatePresenceOf = function(prop, obj) {
    var either = Either("Must include a "+prop);
    return obj[prop] ? either(obj) : either(null);
  }.autoCurry();
               
  var saveUser = compose(fmap(fmap(ajax.save)),
                         fmap(_validatePresenceOf("name")),
                         _validatePresenceOf("password"));
                     
  // 
  // // Exercise 4:
  // // ============
  // Refactor _getAllPrices to use mcompose
  
  var _getAllPrices = function(shipment) {
    return mbind(shipment.orders, function(order) {
      return mbind(order.items, function(item) {
        return item.price;
      });
    });
  }
  
  var totalCost = compose(sum, _getAllPrices);

 
 return {
   firstStreet: firstStreet,
   uploadFileContents: uploadFileContents,
   saveUser: saveUser,
   totalCost: totalCost
 } 
}
