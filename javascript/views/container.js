App.Views.Container = Backbone.View.extend({
	initialize: function() {
		_.bindAll(this, "render");
	},
	render: function() {
		var $container = this.$(".listing").empty();
		App.Rooms.each(function(room) {
			new App.Views.Room({
				model: room,
				$container: $container
			}).render();
		});
		return this;
	}
});