Exercises = require('./first_class_exercises');

describe("Exercises", function(){
  var E = null;
  
  beforeEach(function(){
    spyOn(Views.Post, 'index').andCallThrough();
    spyOn(Page, 'render').andCallThrough();
    spyOn(JSON, 'stringify');
    spyOn(Http, 'upload');
    spyOn(File, 'write').andCallFake(function(name, content, cb){ cb("FILE"); });
    E = Exercises();
  });

  it('Exercise 1', function(){
    callback = jasmine.createSpy('callback');
    E.getComments(callback);
    expect(callback).toHaveBeenCalledWith(['comment1', 'comment2']);
  });
  
  it('Exercise 2', function(){
    E.getPosts();
    expect(Views.Post.index).toHaveBeenCalledWith(['post1', 'post2']);
  });
  
  it('Exercise 3', function(){
    callback = jasmine.createSpy('callback');
    E.renderPage("some content", callback);
    expect(Page.render).toHaveBeenCalledWith("some content", jasmine.any(Function));
    expect(callback).toHaveBeenCalled();
  });
});
