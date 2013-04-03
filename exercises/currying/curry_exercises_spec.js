Exercises = require('./curry_exercises');

describe("Curry Exercises", function(){
  var E = null;
  
  beforeEach(function(){
    E = Exercises();
  });
  
  it('Exercise 1', function(){
    expect(E.words("Jingle bells Batman smells")).toEqual(['Jingle', 'bells', 'Batman', 'smells']);
  });
  
  it('Exercise 2', function(){
    expect(E.unwords(['Jingle', 'bells', 'Batman', 'smells'])).toEqual("Jingle bells Batman smells");
  });
  
  it('Exercise 3', function(){
    expect(E.filterQs(['quick', 'camels', 'quarry', 'over', 'quails'])).toEqual(['quick', 'quarry', 'quails']);
  });
  
  it('Exercise 4', function(){
    expect(E.max([323,523,554,123,5234])).toEqual(5234);
  });
  
  it('Bonus', function(){
    var callback = jasmine.createSpy('callback');
    E.getComments(callback);
    expect(callback).toHaveBeenCalledWith(['comment1', 'comment2']);
  });

});
