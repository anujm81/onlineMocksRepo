Router.configure({
  layoutTemplate: 'layoutTemplateHere'
});



Router.route('/post/:_id', function () {
  this.render('post');
},{
	name:'addNew',
	data:function(){return Tasks.findOne(this.params._id);},
	waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('tas');
  }

});


Router.route('/', function () {
  this.render('taskList');
}, {
  name: 'home',
  	waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('tasks');
}
});

Router.route('/search', function () {
  this.render('search');
}, {
  name: 'Search',
    waitOn: function () {
    // return one handle, a function, or an array
    return Meteor.subscribe('sear');
}
});