Exercises = require('./functor_exercises');

describe("Functor Exercises", function(){
  var E = null;
  
  beforeEach(function(){
    spyOn(Http, 'upload');
    spyOn($, 'html');
    E = Exercises();
  });
  
  it('Exercise 1', function(){
    var name1 = {first: "Robinson", middle: "Wainwright", last: "Sudan"}
      , name2 = {first: "John", last: "Smith"};
    expect(E.middleInitial(name1)).toEqual(Maybe('W'));    
    expect(E.middleInitial(name2)).toEqual(Maybe(undefined));
  });
  
  it('Exercise 2', function(){
    E.updateAvatar('image.png');
    E.updateAvatar();
    expect(Http.upload.callCount).toEqual(1);
  });           
  
  it('Exercise 3', function(){
    E.setAvatarImg('image.png');
    expect($.html).toHaveBeenCalledWith('<img src="image.png" />');
    E.setAvatarImg(undefined);
    expect($.html).toHaveBeenCalledWith('<img src="default.png" />');
  }); 
  
  it('Exercise 4', function(){
    var person1 = {addresses: [{street: "1 Merry st."}]}
      , person2 = {addresses: []}
      , person3 = {};
    expect(E.firstStreet(person1)).toEqual(Maybe(Maybe(Maybe("1 Merry st."))));
    expect(E.firstStreet(person2)).toEqual(Maybe(Maybe(undefined)));
    expect(E.firstStreet(person3)).toEqual(Maybe(undefined));
  });
  
  it('Bonus', function(){
    fmap(function(x){ return x + 1; }, E.Spinner(1));
  });
  
});
