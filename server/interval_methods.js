	
	// DB observer code.


    // Observer for empty alert date fields for calculation. 
    // FIXME: Updates won't run after alertDate is set. Maybe one more false / true trigger?

empty_alerts = Tasks.find({alertDate:"",endDate:{$ne: ""},startDate:{$ne: ""}});
		
		empty_alerts.observe ({
			
			added: function (row_data) {
				
				console.log("Calculating alert date for added id: ");

				// Default is + 14 days for end date		

				var endDate = new Date(row_data.endDate);
				var alertDate = endDate.substDays(14).toISOString();


				Tasks.update(row_data._id,{$set: {alertDate: alertDate}});
				console.log("updated object:");
				console.log(alertDate);
				
				
				
			}, 

		changed: function (row_data) {
			
			console.log("Calculating alert date for changed id: ");

			var endDate = new Date(row_data.endDate);
			var alertDate = endDate.substDays(14).toISOString();

			Tasks.update(row_data._id,{$set: {alertDate: alertDate}});

			console.log("updated object:");
			console.log(alertDate);


			
		}});
	

		approved_tasks = Tasks.find({owner_approved:"1"});
		
	// Observer for changes in approved list
		
		approved_tasks.observeChanges ({
				
				added: function (rowId,rowFields) {
			
					console.log("Lisätty tehtävä: " + rowId);
			
			
				}
		
		
		
		});



		done_alerts = Tasks.find({done_alert_sent:false,status:"3"});

		
	// Observer for email alert about 
		
		done_alerts.observeChanges ({
				
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

	
		// Observer for email alerts about delayed tasks.
		
		delayed_alerts = Tasks.find({});  // TODO: define delay range
/*		
		delayed_alerts.observeChanges({
			
			added: function (taskId,rowFields) {
			//	this.unblock();
				console.log ('Lähetetään sähköpostia.');
				Meteor.call('sendEmail',"joona.jarvela@gmail.com","joona.jarvela@gmail.com","aihe", "Tehtävä " + taskId + " on valmistunut.");
								
				console.log("Lisätty tehtävä: " + taskId);
		
		
			}
		});
*/		
		
		
		
		
		
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
	
	
	