// Global Abatement...
var App = {
	// Templates...
	Models: {},
	Collections: {},
	Views: {},
	// Collection instances...
	Rooms: null,
	Container: null
};

// jQuery DOM Ready...
$(function() {
	
	window.ouyaRoom = new App.Models.Room({
		name: "The Ouya Room"
	});

	// Create an instance of the 'Room' collection...
	App.Rooms = new App.Collections.Room();

	App.Rooms.add(window.ouyaRoom);
	App.Rooms.add(window.smallRoom);

	App.Container = new App.Views.Container({
		el: $("#roominate")
	});

	App.Container.render();

	App.Rooms.on("add remove", function() {
		App.Container.render();
	});

});