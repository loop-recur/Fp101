require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function() {
  
  // Exercise 1
  // split :: String -> String -> [String]
  //==============
  
  //+ words :: String -> [String]
  var words = function(str) {
    return split(' ', str);
  }



  // Exercise 2
  // join :: String -> [String] -> String  
  //==============
  
  //+ unwords :: [String] -> String
  var unwords = function(xs){
    return join(' ', xs);
  }
    
    
  // Exercise 3
  // match :: Regex -> String -> Bool
  //==============
  
  //+ filterQs :: [String] -> [String]
  var filterQs = function(xs) {
    return filter(function(x){ return match(/q/i, x);  }, xs);
  }
  
  
  // Exercise 4
  //==============
  // Use the helper function _keepHighest to refactor max
  
  //+ _keepHighest :: Number -> Number -> Number
  var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be
  
  //+ max :: [Number] -> Number
  var max = function(xs) {
    return reduce(function(acc, x){
      return _keepHighest(acc, x);
    }, 0, xs);
  }
  
  
  // Bonus 1
  //==============
  
  //+ getComments :: ([Comment] -> _) -> undefined
  var getComments = function(callback) {
    ajax.get('/comments', function(comments){
      callback(comments);
    });
  }
  
  
  return {
    words: words,
    unwords: unwords,
    filterQs: filterQs,
    max: max,
    getComments: getComments
  }
}
