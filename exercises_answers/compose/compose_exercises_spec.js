Exercises = require('./compose_answers')

describe("Compose Exercises", function(){
  var E = null;
  
  var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000}
  ];
  
  beforeEach(function(){
    E = Exercises();
  });

  it('Exercise 1', function(){
    expect(E.averageDollarValue(CARS)).toEqual(790700);
  });
  
  it('Exercise 2', function(){
    expect(E.nameOfFastestCar(CARS)).toEqual('Aston Martin One-77');
  });
  
  it('Exercise 3', function(){
    expect(E.createTable(CARS)).toEqual('<table><tr>Ferrari FF</tr><tr>Spyker C12 Zagato</tr><tr>Jaguar XKR-S</tr><tr>Audi R8</tr><tr>Aston Martin One-77</tr><tr>Pagani Huayra</tr></table>');
  });
  
  it('Exercise 4', function(){
    expect(E.absurdPrices(CARS)).toEqual('1850000, 1300000');
  });
  
  it('Exercise 5', function(){
    expect(E.sanitizeNames(CARS)).toEqual(['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);
  });
  
});
