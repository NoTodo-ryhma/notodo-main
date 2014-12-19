
$(document).ready(function() {

	
	$("#navi_left" ).click(function( event ) {
        var next_slider ="input#inp_owner"
	    event.preventDefault();
	    $("#slider_bg").hide( "slide",{direction:"left"},400, function () {$( "input#inp_taskName" ).replaceWith( $(next_slider) );} );
	    $("#slider_bg").show( "slide",{direction:"right"} );
	    

	});
	
	$(".ympyra" ).hover(function( event ) {
        event.preventDefault();
        var ymid = $(this).attr("id");
        $("div#" + ymid).toggleClass("ympyra_hover"); 

	});

	$(".ympyra" ).click(function( event ) {

	    event.preventDefault();
	    var ymid = $(this).attr("id");
	    
	    $("div[id^=" + ymid.substring(0,3) + "]").removeClass("ympyra_select");
        $("div#" + ymid).addClass("ympyra_select"); 


        console.log("klikattiin ympyrää kohteessa" + ymid);
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



