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
    var results = [];
    for(i in users) {
      results.push(users[i].name);
    }
    return results;
  }
  

  // Exercise 2
  // ==============
  
  var longNames = function(users) {
    var results = [];
    for(i in users) {
      var name = users[i].name;
      if(name.length > 4) results.push(users[i]);
    }
    return results;
  }
  
  
  // Exercise 3
  // ==============
  
  var lengthOfAllHobbies = function(users) {
    var count = 0;
    for(u in users) {
      count += users[u].hobbies.length;
    }
    return count;
  }
  
  
  // Bonus
  // ==============
  
  var personWithTheMostHobbies = function(users) {
    var winner = {hobbies:[]};

    for(i in users) {
      var user = users[i];
      if(user.hobbies.length > winner.hobbies.length) winner = user;
    }
    return winner;
  }
  
  // Bonus 1
  // ==============
  // Implement map in terms of reduce
  
  // Bonus 2
  // ==============
  // Implement filter in terms of reduce
  
  
  return {
    names: names,
    longNames: longNames,
    lengthOfAllHobbies: lengthOfAllHobbies,
    personWithTheMostHobbies: personWithTheMostHobbies
  }
}