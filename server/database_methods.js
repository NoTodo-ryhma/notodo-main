if(Meteor.isServer) { 
    
	Meteor.publish("taskslist", function () {
		    return Tasks.find();
		  });

	
	Meteor.methods({
    	
    	add_task: function(kutsuID) {
    		check(kutsuID, String);
    		 console.log("CREATING TASK " + kutsuID);
    			var rowID = Tasks.insert({task_desc: "",
					owner: "",
					assigned_to: "",
					startDate: "",
					endDate: "",
					priority: "",
					difficulty: "",
					complete: "",
					title:""});
    			console.log("Initialized document Row id: " + rowID);
    			return rowID;
    		
    	},
 
    	update_task: function(rowID,data) {

    		console.log("Updating document Row id: " + rowID);
    		        	
    		Tasks.update(rowID,{ $set: data},function(error,aff_records) {

    		// Callback when db update ready.
    	
                
        });
        
    	}
/*        
        remove_task: function(rowID,selector)  {
        	
        	Tasks.remove(rowID);
        	
        }		
*/	
      
        
    });
}