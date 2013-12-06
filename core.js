var App = {
	Models: {},
	Collections: {},
	Rooms: null
};

$(function() {

	window.ouyaRoom = new App.Models.Room({
		title: "The Ouya Room"
		// Need an association between 'rooms' and 'times'...
	});

	App.Room = new App.Collections.Room();

	App.RoomCollection.add(window.ouyaRoom);

	/*var ouyaRoom, smallRoom;
	ouyaRoom = new App.Models.RoominateRooms();
	smallRoom = new App.Models.RoominateRooms();*/

});

// Go through the Models section in Backbone.js book...

App.Models.Room = Backbone.Model.extend({
	/*defaults: {
		title: "Add a room title...",
		timeSlots: [
			"8:00 A.M.",
			"8:30 A.M.",
			"9:00 A.M.",
			"9:30 A.M.",
			"10:00 A.M.",
		], 
	},*/
	initialize: function() {
		console.log("This model was initialized...");
		this.on("change:title", function() {
			console.log("A 'title' change has occured...");
		});
	},
	validate: function(attrs) {
		if (!attrs.title) {
			return "A 'title' is needed...";
		}
	},
	setTitle: function(newTitle) {
		this.set({ title: newTitle });
	}
});