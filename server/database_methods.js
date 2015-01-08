if(Meteor.isServer) { 
    Meteor.methods({
    	
    	add_task: function(kutsuID) {
    		check(kutsuID, String);
    		 console.log("CREATING TASK " + kutsuID);
    			var rowID = Tasks.insert({task_name: "",
					owner: "",
					assigned_to: "",
					startDate: "",
					endDate: "",
					priority: "",
					difficulty: ""});
    			console.log("Initialized document Row id: " + rowID);
    			return rowID;
    		
    	},
 
    	update_task: function(rowID,data) {
//    		check (rowID,String);   Höpöhöpö check joka ei tee mitään järkevää koska Meteor.
//    		check (upd_key,Object);
//    		check (upd_value,Object);
    		console.log("Updating document Row id: " + rowID);
    		        	
    		Tasks.update(rowID,{ $set: data},function(error,aff_records) {

    		// Callback when db update ready.
    	
                
        });		
	
        }
        
    });
}