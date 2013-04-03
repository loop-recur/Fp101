require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function() {
  
  // Exercise 1:
  // ============
  
  //+ averageDollarValue :: [Car] -> Number
  var averageDollarValue = compose(average, map('.dollar_value'));
     

  
  // Exercise 2:
  // ============
    
  //+ nameOfFastestCar :: [Car] -> String
  var nameOfFastestCar = compose('.name', last, sortBy('.horsepower'));
  
  
  
  // Exercise 3:
  // Make createTable pointfree with the help of _makeTableRow
  // ============
  
  //+ _makeTableRow :: Car -> Html
  var makeTableRow = function(car) {
    return $('<tr>', {text: car.name});
  }
  
  //+ createTable :: [Car] -> Html
  var createTable = compose($('<table>').append, map(makeTableRow));
  
  
  // Exercise 4:
  // ============
  
  //+ _outrageousPrice :: Car -> Bool
  var _outrageousPrice = compose(lte(1000000), pluck('dollar_value'));
   
  //+ absurdPrices :: [Car] -> String
  var absurdPrices = compose(join(', '),
                             map(pluck('dollar_value')),
                             filter(_outrageousPrice));
  
  
  // Exercise 5:
  // ============
   
  //+ sanitizeNames :: [Car] -> String
  var sanitizeNames = compose(map(replace(/\W+/g, '_')),
                              map(compose(toLowerCase, pluck('name'))));
  
  
  // Bonus:
  // ============
  
  //+ sanitizeNames :: [Car] -> String
  var sanitizeNames = map(compose(replace(/\W+/g, '_'), toLowerCase, pluck('name')));
  
  
  return {
    nameOfFastestCar: nameOfFastestCar,
    averageDollarValue: averageDollarValue,
    createTable: createTable,
    absurdPrices: absurdPrices,
    sanitizeNames: sanitizeNames
  }
}
