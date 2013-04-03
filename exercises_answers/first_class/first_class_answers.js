require('../../support/FunctionalJS/functional').expose();
require('../../support/PreludeJS/prelude').expose();
require('../../support/typeclasses');
require('../stubs');

module.exports = function(){

  // Exercise 1
  // ============
  
  var getComments = function(callback) {
    ajax.get('/comments', callback);
  }
  
  
  // Exercise 2
  // ============
  
  var getPosts = function() {
    db.find('posts', Views.Post.index);
  }
  
  
  // Exercise 3
  // ============
  
  var renderPage = Page.render;

  
  return {
    getComments: getComments,
    getPosts: getPosts,
    renderPage: renderPage
  }
}
