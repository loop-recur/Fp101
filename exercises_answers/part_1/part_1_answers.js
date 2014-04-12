require('../../support/lambdajs/utils').expose(global);
require('../../support/lambdajs/lambda').expose(global);
require('pointfree-fantasy').expose(this);
require('../stubs');

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
var words = split(' ');

  
// Exercise 2
// match :: Regex -> String -> Bool
//==============

//+ filterQs :: [String] -> [String]
var filterQs = filter(match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

//+ _keepHighest :: Number -> Number -> Number
var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be

//+ max :: [Number] -> Number
var max = reduce(_keepHighest, 0)

// Exercise 4:
// ============

var _average = function(xs) { return reduce(add, 0, xs) / xs.length; };

//+ averageDollarValue :: [Car] -> Number
var averageDollarValue = compose(_average, map(pluck('dollar_value')));
   


// Exercise 5:
// ============
  
//+ nameOfFastestCar :: [Car] -> String
var nameOfFastestCar = compose(pluck('name'), last, sortBy(pluck('horsepower')));



// Exercise 6:
// ============

//+ isAvailable :: Car -> Bool
var isAvailable = compose(lte(0), indexOf('in_stock'), Object.keys)



// Exercise 7:
// ============

//+ _outrageousPrice :: Car -> Bool
var _outrageousPrice = compose(lte(1000000), pluck('dollar_value'));
 
//+ absurdPrices :: [Car] -> String
var absurdPrices = compose(join(', '),
                           map(pluck('dollar_value')),
                           filter(_outrageousPrice));


// Exercise 8:
// ============
 
//+ sanitizeNames :: [Car] -> String
var sanitizeNames = compose(map(replace(/\W+/g, '_')),
                            map(compose(toLowerCase, pluck('name'))));


// Bonus:
// ============

//+ sanitizeNames :: [Car] -> String
var sanitizeNames = map(compose(replace(/\W+/g, '_'), toLowerCase, pluck('name')));

  
module.exports = { words: words,
                   filterQs: filterQs,
                   max: max,
                   nameOfFastestCar: nameOfFastestCar,
                   averageDollarValue: averageDollarValue,
                   isAvailable: isAvailable,
                   absurdPrices: absurdPrices,
                   sanitizeNames: sanitizeNames
                 } 
