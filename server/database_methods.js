if(Meteor.isServer) { 
    
	Meteor.publish("taskslist", function () {
		    return Tasks.find();
		});
//	Meteor.publish("userlist", function () {
//		return Meteor.users.find();
//		});

	
	
	Meteor.methods({
    	
    	add_task: function(kutsuID) {
    		check(kutsuID, String);
    		 console.log("CREATING TASK " + kutsuID);
    			var rowID = Tasks.insert({task_desc: "",
					owner: "",									// Task owner's user ID
					assigned_to: "",							// Task assignees user ID
					startDate: "",
					endDate: "",
					priority: "",
					difficulty: "",
					done_alert_sent:"",							// True if alert for done task was sent.
					late_alert_sent:"",							// True if alert for task about to delay was sent.
					owner_approved:"",							// True if task owner approved task. -> If status == 3 set completed true. 
					status: "",									// 1 = waiting, 2 = working, 3 = done.
					completed:"",								// True if task is done and approved. Task gets purged in next DB cleanup.
					title:""});
    			console.log("Initialized document Row id: " + rowID);
    			return rowID;
    		
    	},
 
    	update_task: function(rowID,data) {

    		console.log("Updating document Row id: " + rowID);
    		        	
    		Tasks.update(rowID,{ $set: data},function(error,aff_records) {

    		// Callback when db update ready.
    	
                
        });
        
    	},
    	
    	find_users: function () {
    		console.log ('haetaan käyttäjät');
    		var Muserlist = Meteor.users.find({ },{fields: {name:1,email:1}}).fetch();
    		return Muserlist;
    		
    		
    	}
    	
    	/* ,        
        remove_task: function(rowID,selector)  {
        	
        	Tasks.remove(rowID);
        	
        }		
*/	
      
        
    });
}