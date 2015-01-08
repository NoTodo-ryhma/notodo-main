
$(document).ready(function() {
	
	Meteor.call('add_task','kutsu1',function(error,rowID) { 
		Session.set('sess_rowID', rowID);	
		console.log ("virheet: " + error);	
		console.log ("Asetettu rowid: " + rowID);	
		
	});
	
	
	$("#navi_left" ).click(function( event ) {
        var next_slider ="input#inp_owner"
	    event.preventDefault();
	    $("#slider_bg").hide( "slide",{direction:"left"},400, function () {$( "input#inp_taskName" ).replaceWith( $(next_slider) );} );
	    $("#slider_bg").show( "slide",{direction:"right"} );
	    

	});
	
	$(".inp_taskName").blur(function( event ) {
		var data = {task_name:$(this).val()};

		Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {

			console.log ("muutetut tiedostot: " + aff_records);	
			console.log ("virheet: " + error);	
			
		});
	});
	
	$(".inp_ownerkName").blur(function( event ) {
		var data = {owner:$(this).val()};;
		
		Meteor.call('update_task',Session.get('sess_rowID'),data,function(error,aff_records) {

			
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
        var idNumDifficulty = ymid.substring(3);
        console.log(idNumDifficulty);
        Session.set("difficulty", idNumDifficulty);
        console.log("diffictulty: " + Session.get("difficulty"));
        console.log("klikattiin ympyrää kohteessa" + ymid);
	});
	
	$(".ympyra2" ).click(function( event ) {

	    event.preventDefault();
	    var ymid2 = $(this).attr("id");
	    
	    $("div[id^=" + ymid2.substring(0,1) + "]").removeClass("ympyra2_select");
        $("div#" + ymid2).addClass("ympyra2_select"); 
        var idNumPriority = ymid2.substring(3);
        console.log(idNumPriority);
        Session.set("priority", idNumPriority);
        console.log("priority: " + Session.get("priority"));
        console.log("klikattiin ympyrää kohteessa" + ymid2);
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

	});	    

        
	
	
	

  

});



