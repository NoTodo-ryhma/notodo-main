	
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



		done_alerts = Tasks.find({done_alert_sent:false});

		
	// Observer for email alert about 
		
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
	
	
	