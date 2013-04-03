Exercises = require('./loop_exercises')

describe("Exercises", function(){
  var E = null;
  var USERS = [
    {name: "Joe", hobbies: ["fishing", "jogging", "hiking", 'boggle']},
    {name: "Barbara", hobbies: ["legos", "stone masonry", "cars"]},
    {name: "Katie", hobbies: ["dancing", "reading"]},
    {name: "Don", hobbies: ["crying"]}
  ];
  
  beforeEach(function(){
    E = Exercises();
  });

  it('Exercise 1', function(){
    expect(E.names(USERS)).toEqual(["Joe", "Barbara", "Katie", "Don"]);
  });
  
  it('Exercise 2', function(){
    expect(E.longNames(USERS)).toEqual([USERS[1], USERS[2]]);
  });
  
  it('Exercise 3', function(){
    expect(E.lengthOfAllHobbies(USERS)).toEqual(10)
  });
  
  it('Bonus', function(){
    expect(E.personWithTheMostHobbies(USERS)).toEqual(USERS[0]);
  }); 
});
