var E = require('./part_1_exercises')
var assert = require("chai").assert

describe("Part 1 Exercises", function(){  
  var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000}
  ];

  it('Exercise 1', function(){
    assert.deepEqual(E.words("Jingle bells Batman smells"), ['Jingle', 'bells', 'Batman', 'smells']);
  });

  it('Exercise 2', function(){
    assert.deepEqual(E.filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), ['quick', 'quarry', 'quails']);
  });
  
  it('Exercise 3', function(){
    assert.equal(E.max([323,523,554,123,5234]), 5234);
  });

  it('Exercise 4', function(){
    assert.equal(E.averageDollarValue(CARS), 790700);
  });
  
  it('Exercise 5', function(){
    assert.equal(E.nameOfFastestCar(CARS), 'Aston Martin One-77');
  });
  
  it('Exercise 6', function(){
    assert.ok(E.isAvailable(CARS[0]))
    assert.notOk(E.isAvailable(CARS[1]))
  });
  
  it('Exercise 7', function(){
    assert.equal(E.absurdPrices(CARS), '1850000, 1300000');
  });
  
  it('Exercise 8', function(){
    assert.deepEqual(E.sanitizeNames(CARS), ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);
  });
  
});
