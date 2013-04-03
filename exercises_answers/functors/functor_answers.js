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
  // rewrite updateAvatar to use Maybe.
  
  var updateAvatar = compose(fmap(Http.upload), Maybe);
  
  
  // Exercise 3:
  // Refactor setAvatarImg to use Either
  // ============
  
  var _makeImage = function(src){
    return '<img src="'+src+'" />';
  }
  
  var setAvatarImg = compose(fmap($.html), fmap(_makeImage), Either('default.png'));
 
 
  // Exercise 4:
  // ============
  // Use _get to safely traverse to the person's street
 
  //+ firstStreet :: Person -> Maybe(Maybe(Maybe(String)))
  var firstStreet = compose(fmap(fmap(_get('street'))),
                            fmap(_get(0)),
                            _get('addresses'));

                                 

  // Bonus:
  // Define a functor instance for Spinner that shows and hides a spinner
  // $('#spinner') is a jquery mock that implments show/hide
  var Spinner = Constructor(function(val){
    this.val = val;
    this.spinner = $('#spinner');
  })
  
  Functor(Spinner, {
    fmap: function(f){
      this.spinner.show();
      var result = f(this.val);
      this.spinner.hide();
      return Spinner(result);
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
