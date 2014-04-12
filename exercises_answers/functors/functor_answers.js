require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function(){
  
  //+ _get :: a -> Maybe(a)
  var _get = function(key, obj) {
    return Maybe(obj[key]);
  }.autoCurry();

    
  // Exercise 1:
  // ============
  // Implement middleInitial
  // @deftype Name = {first: String, middle: Maybe(String), last: String}
  
  var middleInitial = compose(fmap(first), _get('middle'));

  
  // Exercise 2:
  // ============
  // rewrite toCharacter to use Maybe.
  
  var toCharacter = compose(fmap(String.fromCharCode), Maybe);

  // Exercise 4:
  // ============
  // Use _get to safely traverse to the person's street
 
  //+ firstAddress :: Person -> Maybe(Maybe(String))
  var firstAddress = compose(fmap(_get(0)), _get('addresses'));
 

  // Bonus:
  // ============
  // Use _get to safely traverse to the person's street
 
  //+ firstStreet :: Person -> Maybe(Maybe(Maybe(String)))
  var firstStreet = compose( fmap(fmap(_get('street')))
                           , fmap(_get(0))
                           , _get('addresses')
                           );

                       
 return {
   middleInitial: middleInitial,
   updateAvatar: updateAvatar,
   setAvatarImg: setAvatarImg,
   firstStreet: firstStreet,
 } 
}
