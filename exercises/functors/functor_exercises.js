require('../../support/lambdajs/utils').expose(global);
require('../../support/lambdajs/lambda').expose(global);
require('pointfree-fantasy').expose(this);
var Log = require('../log')
var Maybe = require('pointfree-fantasy/instances/maybe');
  
//+ _get :: a -> Maybe(a)
var _get = _.curry(function(key, obj) {
  return Maybe(obj[key]);
});

  
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
// rewrite toInt to use Maybe.

//+ toInt :: a -> Int|Null
var toInt = function(n) {
  if(n){
    parseInt(n);
  }
}


// Exercise 3:
// ============
// Fix the error in this code...our log shows [Object object]

//+ logUserName :: Maybe({name: String}) -> Log(String)
var logUserName = function(maybe_current_user) {
  return Log.write(maybe_current_user.name);
}


// Exercise 4:
// ============
// Use _get() to return a safe representation of the first address :: Person -> Maybe(Address)

//+ firstAddress :: Person -> Address|Null
var firstAddress = function(person) {
  return person.addresses && first(person.addresses);
}

// Exercise 5:
// ============
// Use readFile() and take() and Log.write() to show the first 5 chars of a file.

//+ introText :: Filename -> Promise(Log(String))
var introText = function(filename) {
  // readFile(filename)
  // take(5)
  // Log.write()
}


// Bonus
// ============
// Use _get() to safely traverse to the person's street to return :: Person -> Maybe(Maybe(String))

//+ firstStreet :: Person -> String|Null
var firstStreet = function(person) {
  if(firstAddress(person)) {
    return first_address.street;
  }
}

                       
module.exports = { middleInitial: middleInitial,
                   toInt: toInt,
                   setAvatarImg: setAvatarImg,
                   firstStreet: firstStreet
                 } 
