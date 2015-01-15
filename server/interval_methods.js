	
	// Start change checker.

		completed_tasks = Tasks.find({completed:true,difficulty:"4"});
		
	// Observer for changes in the query
		
		completed_tasks.observeChanges({
				
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


	
	
	
	