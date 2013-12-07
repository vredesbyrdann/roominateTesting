// Rooms model...
App.Models.Room = Backbone.Model.extend({
	defaults: {
		// Figure out the time slots...
	},
	validate: function(attrs) {
		if (!attrs.name) {
			console.log("Room model has no name...");
		}
	},
	initialize: function(attributes) {
		var roomName = attributes.name || "No Need For A Name..?";
		console.log("A new room model for " + roomName + " was initialized...");
	}
});