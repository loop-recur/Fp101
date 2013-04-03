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
  
  //+ middleInitial :: Name -> Maybe(Char)
  var middleInitial = function(name) {
    var maybe_middle = _get('middle');
    // return the maybe middle initial
  }
  
  // Exercise 2:
  // ============
  // rewrite updateAvatar to use Maybe.
  
  var updateAvatar = function(file) {
    if(file){ Http.upload(file); }
  }        
  
  // Exercise 3:
  // Refactor setAvatarImg to use Either
  // ============
  
  var _makeImage = function(src){
    return '<img src="'+src+'" />';
  }
  
  var setAvatarImg = function(filename) {
    var img;
    if(filename) {
      img = _makeImage(filename);
    } else {
      img = _makeImage('default.png');
    }
    $.html(img);
  }

  var setAvatarImg = compose(fmap($.html), fmap(_makeImage), Either('default.png'));

  // Exercise 4:
  // ============
  // Use _get() to safely traverse to the person's street instead of the if's
  
  
  //+ firstStreet :: Person -> String
  var firstStreet = function(person) {
    var addresses = person.addresses;
    if(addresses) {
      var first_address = addresses[0];
      if(first_address) {
        return first_address.street;
      }
    }
  }
  

  // Bonus:
  // ============
  // Define a functor instance for Spinner that shows and hides a spinner
  // $('#spinner') is a jquery mock that implments show/hide
  var Spinner = Constructor(function(val){
    this.val = val;
    this.spinner = $('#spinner');
  })
  
  Functor(Spinner, {
    fmap: function(f){
      // TODO: implement
    }
  })
  
                       
 return {
   middleInitial: middleInitial,
   updateAvatar: updateAvatar,
   setAvatarImg: setAvatarImg,
   firstStreet: firstStreet,
   Spinner: Spinner
 } 
}
