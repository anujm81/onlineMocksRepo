Template.task.helpers({

    compare: function () {
       return this.owner == Meteor.userId();
}
});
 Template.task.events({
    "click .toggle-checked": function () {
      console.log(this.checked);

      Meteor.call("setChecked",this._id,!this.checked);
    },
    "click .priv" : function(){
      console.log(this.Public);
      Meteor.call("setPrivate",this._id,!this.Public);
    },
    "click .delete": function () {
      Meteor.call("deleteTask", this._id);
    },
     'click #editPost': function () {
    Router.go('addNew',{_id: this._id});
  }

  });\
 */ccvdsvdsvsdvsdv/*