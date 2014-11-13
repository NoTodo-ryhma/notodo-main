contact = new Mongo.Collection("contact");
Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

 Template.contacts.helpers({
   contacts: function () {
     return contact.find({});
   }
 });
  Template.tasks.events({
    'submit': function(event, template) {
      event.preventDefault();
      /*var task = event.target.tasks.value;
      var recipient = event.target.tasks.value;
      var difficulty = event.target.tasks.value;
      var priority = event.target.tasks.value; */
      Tasks.insert({
        task_name: template.find(".task").value,
        recipient: template.find(".recipient").value,
        difficulty: template.find(".difficulty").value,
        priority: template.find(".priority").value
        /*task_name: task,
        recipient: recipient,
        difficulty: difficulty,
        priority: priority*/
    });
      console.log("Koitett lisätä");
    }
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
