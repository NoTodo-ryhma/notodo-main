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
					alertDate: "",								// Date the delay alert will be sent.
					priority: "",
					difficulty: "",
					done_alert_sent: false,							// True if alert for done task was sent.
					delay_alert_sent: false,							// True if alert for task about to delay was sent.
					owner_approved: false,							// True if task owner approved task. -> If status == 3 set completed true. 
					status: "1",									// 1 = waiting, 2 = working, 3 = done.
					completed: false,								// True if task is done and approved. Task gets purged in next DB cleanup.
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
    		
//    		var serviceList = Meteor.users.find({},{fields: {"services":1,"profile:1"}});
    		var gitUserlist = Meteor.users.find({"services.github":{$exists: true}}).fetch();
    		var googleUserlist = Meteor.users.find({"services.google":{$exists: true}}).fetch();
    		
    		var i = 0;
    		var UserArray = new Array();

    		// Loop for Git service structure.
    		
    		for (i = 0; i < gitUserlist.length ; i++) {
    			
    		var UserObject = {_id:   gitUserlist[i]._id,
    						 name:   gitUserlist[i].profile.name,
    						email:   gitUserlist[i].services.github.email,
    						picture: "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
    						};
    			
    		UserArray.push(UserObject); 
    			
    	    // Loop for Google service structure.
    		
    		}
    		
    		for (i = 0; i < googleUserlist.length; i++) {
    			var userObject = {_id:    googleUserlist[i]._id,
    							  name:   googleUserlist[i].profile.name,
    							  email:  googleUserlist[i].services.google.email,
    							  picture:googleUserlist[i].services.google.picture
    			};
    			
    			UserArray.push(userObject);
    		}
    		
    		


    		
    		return UserArray;
    		
    		
    	}
    	
    	/* ,        
        remove_task: function(rowID,selector)  {
        	
        	Tasks.remove(rowID);
        	
        }		
*/	
      
        
    });
}