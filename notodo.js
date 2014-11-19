contact = new Mongo.Collection("contact");
Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.tasks.rendered=function() {
    $('#startTime').datepicker();
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
      
       /*
      var recipient = event.target.tasks.value;
      var difficulty = event.target.tasks.value;
      var priority = event.target.tasks.value; */
      Tasks.insert({
        task_name: template.find("#task").value,
        recipient: template.find("#recipient").value,
        difficulty: template.find("#difficulty").value,
        priority: template.find("#priority").value
        /*task_name: task,
        recipient: recipient,
        difficulty: difficulty,
        priority: priority*/
    });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
