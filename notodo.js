contact = new Mongo.Collection("contact");
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {  
  Meteor.call("getSessionId", function(err, id) {
  return console.log(id);
});
  
  // counter starts at 0
  //Session.setDefault("counter", 0);

  Template.tasks.rendered=function() {
    $('#startTime').datepicker();
    $('#endTime').datepicker();
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
  Template.tasks.events({
    'click button': function(event, template) {
      event.preventDefault();
      Tasks.insert({
        task_name: template.find("#task").value,
        startDate: template.find("#startDate").value,
        endDate: template.find("#endDate").value,
        recipient: template.find("#recipient").value,
        difficulty: template.find("#difficulty").value,
        priority: template.find("#priority").value
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
