contact = new Mongo.Collection("contact");
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {  
  Meteor.call("getSessionId", function(err, id) {
  return console.log("Session id: " + id);
});
  
  // counter starts at 0
  //Session.setDefault("counter", 0);

  Template.tasks.rendered=function() {
    $('#startDate').datepicker();
    $('#endDate').datepicker();
  }
  
  Template.showTasks.helpers({
    tasks_list: function () {
      console.log("tasks");
      console.log(Tasks.find());
      return Tasks.find({});
    }
  });
 Template.tasks.helpers({
   contacts_list: function () {
     console.log("contacts");
     console.log(contact.find());
     return contact.find({});
   }
 });
  Template.addTask.events({
    'click button': function(event, template) {
      event.preventDefault();
      Tasks.insert({
        task_name: template.find("#inp_taskName").value,
        owner: template.find("#inp_ownerkName").value,
        assigned_to: template.find("#inp_assignedName").value,
        startDate: template.find("#startDate").value,
        endDate: template.find("#endDate").value,
        difficulty: Session.get("#difficulty"),
        priority: Session.get("#priority")
        // Priority and difficulty handled in addTask.js!!!
    });
    }
  });
}

if (Meteor.isServer) {
  
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
  getSessionId: function() {
    return this.connection.id;
  }
});
  });
}
