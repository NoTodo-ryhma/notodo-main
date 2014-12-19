Template.datepicker.rendered=function(){
  this.$('.datepicker').datepicker();
};

Template.body.helpers({
userNow: function() {
	console.log(Meteor.user().services);
	return Meteor.user();
}
//console.log(currentUsr)
	
});

