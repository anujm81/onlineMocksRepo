Tasks = new Mongo.Collection("tasks");

  // This code only runs on the server
  Meteor.publish("tasks", function () {
  	console.log(this.userId);
    return Tasks.find({  $or: [{ Public: {$ne:false }}, { owner: this.userId }]  });
  });
  Meteor.publish("tas", function(){
  	return Tasks.find({owner: this.userId});
  });

Meteor.methods({
  addTask: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      checked : false,
      Public : false
    });
  },
  deleteTask: function (taskId) {
  	 if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    else
    	{
    		Tasks.remove(taskId);
  }},
  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  },
   updateVal: function (taskId, text) {
    Tasks.update(taskId, { $set: { text: text} });
  },
  setPrivate: function (taskId, setPrivate) {
    Tasks.update(taskId, { $set: {Public : setPrivate} });
  }
});