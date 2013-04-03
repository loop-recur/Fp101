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
  
  //+ firstStreet :: Person -> Maybe(street)
  var firstStreet = mcompose(_get('street'), _get(0), _get('addresses'));

  
  // Exercise 2:
  // ============
  var uploadFileContents = mcompose(Http.upload, take(7), String, fs.readFile);
                 
  
  // Exercise 3:
  // ============
  // Refactor saveUser
    
  var _validatePresenceOf = function(prop, obj) {
    var either = Either("Must include a "+prop);
    return obj[prop] ? either(obj) : either(null);
  }.autoCurry();
               
  var saveUser = mcompose(ajax.save,
                         _validatePresenceOf("name"),
                         _validatePresenceOf("password"));
                     
  // 
  // // Exercise 4:
  // // ============
  // Refactor _getAllPrices to use mcompose
  
  var _getAllPrices = mcompose(pluck('price'), pluck('items'), pluck('orders'));
  
  var totalCost = compose(sum, _getAllPrices);


 return {
   firstStreet: firstStreet,
   uploadFileContents: uploadFileContents,
   saveUser: saveUser,
   totalCost: totalCost
 } 
}
