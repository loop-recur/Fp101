require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function(){
    
  // Exercise 1:
  // ============
  
  //+ averageDollarValue :: [Car] -> Number
  var averageDollarValue = function(cars) {
    var values = map(pluck('dollar_value'), cars);
    return average(values);
  }
  
  
  // Exercise 2:
  // ============
  
  //+ nameOfFastestCar :: [Car] -> String
  var nameOfFastestCar = function(cars) {
    var sorted = sortBy(function(car){ return car.horsepower }, cars);
    var fastest = last(sorted);
    return fastest.name;
  }
  
  
  // Exercise 3:
  // Make createTable pointfree with the help of _makeTableRow
  // ============
  
  //+ _makeTableRow :: Car -> Html
  var _makeTableRow = function(car) {
    return $('<tr>', {text: car.name}); // <- don't change, just a helper
  }
  
  //+ createTable :: [Car] -> Html
  var createTable = function(cars) {
    var rows = map(_makeTableRow, cars); // <- make me point free
    return $('<table>').append(rows);
  }
  
  
  // Exercise 4:
  // ============
  // lte is "less than or equal to"
  
  //+ absurdPrices :: [Car] -> String
  var absurdPrices = function(cars) {
    var absurdCars = filter(compose(lte(1000000), pluck('dollar_value')), cars);
    var prices = map(pluck('dollar_value'), absurdCars);
    return join(', ', prices);
  }
  
  
  // Exercise 5:
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
 
 return {
   nameOfFastestCar: nameOfFastestCar,
   averageDollarValue: averageDollarValue,
   createTable: createTable,
   absurdPrices: absurdPrices,
   sanitizeNames: sanitizeNames
 } 
}