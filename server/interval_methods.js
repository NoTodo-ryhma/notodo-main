	
	// DB observer code.

		approved_tasks = Tasks.find({owner_approved:"1"});
		
	// Observer for changes in approved list
		
		approved_tasks.observeChanges({
				
				added: function (rowId,rowFields) {
			
					console.log("Lisätty tehtävä: " + rowId);
			
			
				},

				changed: function (rowId,rowFields) {
					
					console.log("Muutettu tehtävä: " + rowId);
					console.log("tiedot: " + rowFields);
			
			
				},		
				
				removed: function (rowId,rowFields) {
			
					console.log("Poistettu tehtävä: " + rowId);
			
			
				}
		
		
		
		});



		done_alerts = Tasks.find({done_alert_sent:false,status:"3"});

		
	// Observer for email alert about 
		
		done_alerts.observeChanges({
				
				added: function (taskId,rowFields) {
				//	this.unblock();
					console.log ('Lähetetään sähköpostia.');
					Meteor.call('sendEmail',"joona.jarvela@gmail.com","joona.jarvela@gmail.com","aihe", "Tehtävä " + taskId + " on valmistunut.");
					
					
					console.log("Lisätty tehtävä: " + taskId);
			
			
				},

				changed: function (rowId,rowFields) {
					
					console.log("Muutettu tehtävä: " + taskId);
					console.log("tiedot: " + rowFields);
			
			
				},		
				
				removed: function (rowId,rowFields) {
			
					console.log("Poistettu tehtävä: " + taskId);
			
			
				}
		
		
		
		});
		
		
		// Methods for sending Email alerts about completed and delayed tasks.
		
		Meteor.methods({
			  sendEmail: function (to, from, subject, text) {
			    check([to, from, subject, text], [String]);

			    // Let other method calls from the same client start running,
			    // without waiting for the email sending to complete.
			  
			    console.log ("Sending email from: "+ from); 
			    console.log ("Sending email to: "+ to);
			    console.log ("Email subject: "+ subject);
			    console.log ("Email text: "+ text);
			    
			   
			   this.unblock();

			    Email.send({
			      to: to,
			      from: from,
			      subject: subject,
			      text: text
			    });
			  }
			});
	
	
	