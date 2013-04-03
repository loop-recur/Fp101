var Promise = require('../support/node-promise/promise').Promise;

Views = {}

ajax = {
  get: function(path, cb){ cb(['comment1', 'comment2']) }.autoCurry(),
  save: function(){}
}

db = {
  find: function(path, cb){ cb(['post1', 'post2']) }
}

Views.Post = {
  index: id,
  show: id
}

Page = {
  render: function(content, cb){ cb(); }
}

Twitter = {
  getTweets: function(username, cb) { cb(['tweet1', 'tweet2']); }
}

File = {
  write: function(filename, content, cb){ cb('file'); }
}

Http = {
  upload: function(){
    var promise = new Promise();
    Http.uploaded = true;
    return promise;
  }
}

// fake jquery for fun
$ = function(str, attrs) {
  if(attrs) return "<tr>"+attrs.text+"</tr>";
  return {
    append: function(xs) {
      return "<table>"+ join("", xs)+ "</table>";
    },
    show: function(){},
    hide: function(){}
  }
}
$.html = function(){}

makeName = function(str) {
  var parts = str.split(' ');
  return {first: parts[0], middle: Maybe(parts[1]), last: parts[2]};
}


