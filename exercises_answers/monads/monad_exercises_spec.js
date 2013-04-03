Exercises = require('./monad_answers');

describe("Monad Exercises", function(){
  var E = null;
  
  beforeEach(function(){
    spyOn(Http, 'upload').andCallThrough();
    spyOn(ajax, 'save');
    E = Exercises();
  });

  it('Exercise 1', function(){
    var person1 = {addresses: [{street: "1 Merry st."}]}
      , person2 = {addresses: []}
      , person3 = {};
    expect(E.firstStreet(person1)).toEqual(Maybe("1 Merry st."));
    expect(E.firstStreet(person2)).toEqual(Maybe(undefined));
    expect(E.firstStreet(person3)).toEqual(Maybe(undefined));
  });
  
  it('Exercise 2', function(){
    E.uploadFileContents("monad_answers.js");
    waitsFor(function(){ return Http.uploaded });
    runs(function() {
      expect(Http.upload).toHaveBeenCalledWith("require");
    });
  });
  
  it('Exercise 3', function(){
    var user = {name: "John", password: "hey-o"};
    E.saveUser(user);
    expect(ajax.save).toHaveBeenCalledWith(user);   

    E.saveUser({name: "", password: "password"});
    expect(ajax.save).toHaveBeenCalledWith("Must include a name");
  }); 
  
  it('Exercise 4', function(){
    var shipment = {orders: [{items: [{price: 20}]}, {items: [{price: 30}, {price: 50}]}]}
    expect(E.totalCost(shipment)).toEqual(100);
  });
  
});
