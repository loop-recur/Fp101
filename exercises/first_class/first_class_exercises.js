require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function(){

  // Exercise 1
  // ============
  
  var getComments = function(callback) {
    ajax.get('/comments', function(comments){
      callback(comments);
    });
  }
  

  // Exercise 2
  // ============
  
  var getPosts = function() {
    db.find('posts', function(posts) {
      Views.Post.index(posts);
    });
  }
  
  
  // Exercise 3
  // ============
  
  var renderPage = function(content, callback) {
    Page.render(content, function(){
      callback();
    })
  }
  
  
  return {
    getComments: getComments,
    getPosts: getPosts,
    renderPage: renderPage
  }
}
