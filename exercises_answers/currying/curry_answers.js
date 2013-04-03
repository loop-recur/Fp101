require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function() {
  
  // Exercise 1
  // split :: String -> String -> [String]
  //==============
  
  //+ words :: String -> [String]
  var words = split(' ');
  
  
  // Exercise 2
  // join :: String -> [String] -> String  
  //==============
  
  //+ unwords :: [String] -> String
  var unwords = join(' ');
  
  
  // Exercise 3
  // match :: Regex -> String -> Bool
  //==============
  
  //+ filterQs :: [String] -> [String]
  var filterQs = filter(match(/q/i));
  
  
  // Exercise 4
  //==============
  
  //+ _keepHighest :: Number -> Number -> Number
  var _keepHighest = function(x,y){ return x >= y ? x : y; };
  
  //+ max :: [Number] -> Number
  var max = reduce(_keepHighest, 0);
  
  
  // Bonus
  //==============
  
  //+ getComments :: ([Comment] -> _) -> undefined
  var getComments = ajax.get('/comments');
  
  return {
    words: words,
    unwords: unwords,
    filterQs: filterQs,
    max: max,
    getComments: getComments
  }
}

