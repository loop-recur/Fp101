module.exports = function(){
  var map = function(f, xs) {
    var results = [];
    for(i in xs) {
      results.push(f(xs[i]));
    }
    return results;
  }
  
  var filter = function(f, xs) {
    var results = [];
    for(i in xs) {
      if(f(xs[i])) results.push(xs[i]);
    }
    return results;
  }
  
  var reduce = function(f, acc, xs) {
    for(i in xs) {
      acc = f(acc, xs[i]);
    }
    return acc;
  }
  
  
  // Exercise 1
  // ==============
  
  var names = function(users) {
    return map(function(u){ return u.name }, users);
  }
  

  // Exercise 2
  // ==============
  
  var longNames = function(users){
    return filter(function(user){ return user.name.length > 4; }, users);
  }
  

  // Exercise 3
  // ==============
  
  var lengthOfAllHobbies = function(users) {
    return reduce(function(acc, u){ return acc + u.hobbies.length; }, 0, users);
  };
  
  
  // Bonus
  // ==============

  var personWithTheMostHobbies = function(users){
    return reduce(function(user1, user2){
      return user1.hobbies.length > user2.hobbies.length ? user1 : user2;
    }, {hobbies: []}, users);
  }


  return {
    names: names,
    longNames: longNames,
    lengthOfAllHobbies: lengthOfAllHobbies,
    personWithTheMostHobbies: personWithTheMostHobbies
  }
}
