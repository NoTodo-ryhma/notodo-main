

$(document).ready(function() {
	$(".slider_bg").hide();

	// Subscribe to Users list


	
	$("#btn_addTask").click(function () {
		$(".slider_bg").show(1500);  
		
		Meteor.call('add_task','kutsu1',function(error,rowID) { 
		Session.set('sess_rowID', rowID);	
		console.log ("virheet: " + error);	
		console.log ("Asetettu rowid: " + rowID);
		
	});
	
	});
	


	$("#inp_taskTitle").blur(function ( event ) {
		var data = {title:$(this).val()};

		Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {
			// Callback gets fired when server update ready.
		});
	});

	
	$("#inp_taskDesc").blur(function ( event ) {
		var data = {task_desc:$(this).val()};

		Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {
			console.log ("Sessio id" + Session.get('sess_rowID'));	
			console.log ("muutetut tiedostot: " + aff_records);	
			console.log ("virheet: " + error);	
			
		});
	});
	
	$("#inp_ownerkName").click(function ( event) {
		
		// var users = Users.find().fetch();
		console.log('käynnistetään find_users'); 
		Meteor.call('find_users',function(error,result) {
			
			console.log(result);
			
			
		});
		console.log(users2[0]);
		$( "#inp_ownerkName" ).autocomplete({
		      minLength: 0,
		      source: users2,
		      focus: function( event, ui ) {
		        $( "#inp_ownerkName" ).val( ui.item.profile.name );
		        return false;
		      },
		      select: function( event, ui ) {
		        $( "#inp_ownerkName" ).val( ui.item.profile.name );
		        // console.log( ui.item.services.google.picture );
		        $( "#project-id" ).val( ui.item.services.google.email );
		        //$( "#project-description" ).html( ui.item.desc );
		        $( "#project-icon" ).attr( "src", ui.item.services.google.picture );
		 
		        return false;
		      }
		    })
		    .autocomplete( "instance" )._renderItem = function( ul, item ) {
		      return $( "<li>" )
		        .append( "<a>" + item.profile.name + "<br>" + item.services.google.email + "</a>" )
		        .appendTo( ul );
		    };
	});
	
	$("#inp_ownerkName").blur(function ( event ) {
		var data = {owner:$(this).val()};
		
		Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {

			
		});

	
	});

	$("#inp_assignedName").click(function ( event) {
		var users = Meteor.users.find().fetch();
		
		$( "#inp_assignedName" ).autocomplete({
		      minLength: 0,
		      source: users,
		      focus: function( event, ui ) {
		        $( "#inp_assignedName" ).val( ui.item.profile.name );
		        return false;
		      },
		      select: function( event, ui ) {
		        $( "#inp_assignedName" ).val( ui.item.profile.name );
		        console.log( ui.item.services.google.picture );
		        $( "#project1-id" ).val( ui.item.services.google.email );
		        //$( "#project-description" ).html( ui.item.desc );
		        $( "#project1-icon" ).attr( "src", ui.item.services.google.picture );
		 
		        return false;
		      }
		    })
		    .autocomplete( "instance" )._renderItem = function( ul, item ) {
		      return $( "<li>" )
		        .append( "<a>" + item.profile.name + "<br>" + item.services.google.email + "</a>" )
		        .appendTo( ul );
		    };
	});
	$("#inp_assignedName").blur(function( event ) {
		var data = {assigned_to:$(this).val()};
		
		Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {

			console.log ("Sessio id omistaja" + Session.get('sess_rowID'));	
			
		});

	
	});
		

	
	$(".ympyra" ).hover(function( event ) {
        event.preventDefault();
        var ymid = $(this).attr("id");
        $("div#" + ymid).toggleClass("ympyra_hover"); 

	});
	
	$(".ympyra2" ).hover(function( event ) {
        event.preventDefault();
        var ymid = $(this).attr("id");
        $("div#" + ymid).toggleClass("ympyra2_hover"); 

	});

	$(".ympyra" ).click(function( event ) {

	    event.preventDefault();
	    var ymid = $(this).attr("id");
	    $("div[id^=" + ymid.substring(0,1) + "]").removeClass("ympyra_select");
        $("div#" + ymid).addClass("ympyra_select"); 

        var data = {difficulty:ymid.substring(3)};
      
        Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {
        console.log("klikattiin ympyrää kohteessa " + ymid);
        });
	});
	
	$(".ympyra2" ).click(function( event ) {

	    event.preventDefault();
	    var ymid2 = $(this).attr("id");
	    
	    $("div[id^=" + ymid2.substring(0,1) + "]").removeClass("ympyra2_select");
        $("div#" + ymid2).addClass("ympyra2_select"); 
       
        
              
      var data = {priority:ymid2.substring(3)};
      
      Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {
      console.log("klikattiin ympyrää kohteessa " + ymid2);
      });
	});
      
  	
       
	$(".buttons" ).click(function( event ) {

		/**   Playing with images.....
    	    event.preventDefault();
    	    var imgsrc = $(this).attr("src");
    	    var buttonimg = $(this).attr("id");
    	    var pattern = /[A-Z0-9_\-]+/i;
    	    var filepart = pattern.exec(imgsrc);
    	    var filename = filepart.toString() + "rvs.svg";
    	    $("#" + buttonimg).attr("src", filename );
		 **/    	    	    	  

		
	    event.preventDefault();
	    var ymid2 = $(this).attr("id");
			
		
	});	    

	// Check if #inp_startDate should be using native or jquery datepicker.

	
	
	if ($("#inp_startDate").prop('type') != 'date') {
		$("#inp_startDate").datepicker();

		console.log("using date picker");

		$("#inp_startDate").datepicker("option", {onSelect: function(dateText,date_obj) {
			console.log("Closing date");
			//$("#inp_startDate").datepicker( "option", "dateFormat", "yy-mm-dd" );
			
			var dateString = $("#inp_startDate").datepicker('getDate');
			var data = {startDate:dateString.toISOString()};
			
			//console.log("dateString " + dateString.toISOString());
			
			Meteor.call ('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {
	            console.log("klikattiin ympyrää kohteessa " + ymid);
            });
			

			
		}});

	} else {

		$("#inp_startDate").blur(function( event ) {

			var dateStart = new Date ($(this).val());
		
		var data = {startDate:dateStart.toISOString()};
		
		
		Meteor.call ('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {
		
		
			});	
		});
	};




// Check if should be using native or jquery datepicker.

	if ($("#inp_endDate").prop('type') != 'date') {

			
			console.log("using date picker at endDate");
			$("#inp_endDate").datepicker();
			
			$("#inp_endDate").datepicker('option', {onSelect: function() {
				
				var dateString = $("#inp_endDate").datepicker('getDate');
				var data = {endDate:dateString.toISOString()};
				
				//console.log("dateString " + dateString.toISOString());
				
				Meteor.call ('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {

					// Things to do when callback returns.
				
				});
			
			}});
	
	

		
	} else {
		$("#inp_endDate").blur(function( event ) {	

		var dateEnd = new Date ($(this).val());
		var data = {endDate:dateEnd.toISOString()};

	
		Meteor.call ('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {

			// Things to do when callback returns.
		
			});
		});	
	};

	
        
	
	
	

  

});

Template.addTask.events({
	'click #buttons_ok':function(event) {
		 $(".slider_bg").hide();
		
	}  
  });


Meteor.subscribe("userlist");
Users = new Mongo.Collection("users");


