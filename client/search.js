Template.search.events({
    "submit .search-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var textVal = event.target.text.value;

 
      // Insert a task into the collection
      if(this._id){
      Meteor.call("searchVal", textVal);
    }
      else{
        throw new Meteor.Error("not-found");
      }
 
      // Clear form
      event.target.text.value = "";
    }

  });
 Template.search.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });