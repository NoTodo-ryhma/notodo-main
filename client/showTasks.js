

if (Meteor.isClient) {  

	  Meteor.subscribe("taskslist");

	
  Template.showTasks.events({
	  
	  'click .buttons_remove':function( event ) {
			console.log("poistetaan: " + this._id);
			Tasks.remove(this._id);
			
		}
  });
  

  
 
  
}