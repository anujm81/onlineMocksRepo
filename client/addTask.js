Template.post.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var textVal = event.target.text.value;
 
      // Insert a task into the collection
      if(this._id){
      Meteor.call("updateVal",this._id, textVal);
    }
      else{
        Meteor.call("addTask", textVal);
      }
 
      // Clear form
      event.target.text.value = "";
      Router.go('/');
    }

  });
 Template.post.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });