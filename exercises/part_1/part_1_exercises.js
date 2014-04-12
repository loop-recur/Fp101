require('../../support/lambdajs/utils').expose(global);
require('../../support/lambdajs/lambda').expose(global);
require('pointfree-fantasy').expose(this);
  
// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000}
  ];


// Exercise 1
// split :: String -> String -> [String]
//==============

//+ words :: String -> [String]
var words = function(str) {
  return split(' ', str);
}

  
// Exercise 2
// match :: Regex -> String -> Bool
//==============

//+ filterQs :: [String] -> [String]
var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
}


// Exercise 3
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

  
// Exercise 4:
// ============
// Use the helper function _average to refactor averageDollarValue
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

//+ averageDollarValue :: [Car] -> Number
var averageDollarValue = function(cars) {
  var dollar_values = map(function(c) { return c.dollar_value; }, cars);
  return _average(dollar_values);
}


// Exercise 5:
// ============

//+ nameOfFastestCar :: [Car] -> String
var nameOfFastestCar = function(cars) {
  var sorted = sortBy(function(car){ return car.horsepower }, cars);
  var fastest = last(sorted);
  return fastest.name;
}


// Exercise 6:
// ============

//+ isAvailable :: Car -> Boolean
var isAvailable = function(car) {
  return 0 <= Object.keys(car).indexOf('in_stock');
}


// Exercise 7:
// ============
// lte is "less than or equal to"

//+ absurdPrices :: [Car] -> String
var absurdPrices = function(cars) {
  var absurdCars = filter(compose(lte(1000000), pluck('dollar_value')), cars);
  var prices = map(pluck('dollar_value'), absurdCars);
  return join(', ', prices);
}


// Exercise 8:
// ============

//+ sanitizeNames :: [Car] -> String
var sanitizeNames = function(cars) {
  var lowercased = map(compose(toLowerCase, pluck('name')), cars);
  return map(replace(/\W+/g, '_'), lowercased);
}
    
// Bonus:
// compose(map(f), map(g)) == map(compose(f, g));
// Use this information to make sanitizeNames faster
// ============
// var sanitizeNames = ?


module.exports = { words: words,
                   filterQs: filterQs,
                   max: max,
                   nameOfFastestCar: nameOfFastestCar,
                   averageDollarValue: averageDollarValue,
                   isAvailable: isAvailable,
                   absurdPrices: absurdPrices,
                   sanitizeNames: sanitizeNames
                 } 
