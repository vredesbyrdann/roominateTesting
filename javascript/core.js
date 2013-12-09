/**
* Roominate...
*/

var App = {
	Models: {},
	Collections: {},
	Views: {},
	Rooms: null,
	Core: null
};

$(function() {
	
	// Or, does each timeSlot need to have its own model?

	window.ouyaRoom = new App.Models.Room({
		name: "The Ouya Room",
		timeSlots: {
			timeSlotOne: {
				time: "8:00 A.M.",
				booked: false
			},
			timeSlotTwo: {
				time: "8:30 A.M.",
				booked: false
			},
		}
	});
	window.smallRoom = new App.Models.Room({
		name: "The Small Room",
	});
	App.Rooms = new App.Collections.Room();
	App.Rooms.add(window.ouyaRoom);
	App.Rooms.add(window.smallRoom);
	roomView("#room-template");
	coreView(App.Rooms, App.Views.Room);
	App.Core = new App.Views.Core({
		el: $("#roominate")
	});
	App.Core.render();
	App.Rooms.on("add remove", function() {
		App.Core.render();
	});

});

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

App.Collections.Room = Backbone.Collection.extend({
	model: App.Models.Room
});

function roomView(a) {
	App.Views.Room = Backbone.View.extend({
		template: _.template($(a).html()),
		$container: null,
		initialize: function(options) {
			_.bindAll(this, "render", "insert");
			this.$container = options.$container;
			this.listenTo(this.model, "change", this.render);
			this.insert();
		},
		render: function() {
			this.$el.html(this.template(this.model.attributes));
			return this;
		},
		insert: function() {
			this.$container.append(this.$el);
		}
	});
}

function coreView(a, b, c) {
	App.Views.a = Backbone.View.extend({
		initialize: function() {
			_.bindAll(this, "render");
		},
		render: function() {	
			var $container = this.$(".listing").empty();
			b.each(function(item) {
				new c({
					model: item,
					$container: $container
				}).render();
			});
			return this;
		}
	});
}