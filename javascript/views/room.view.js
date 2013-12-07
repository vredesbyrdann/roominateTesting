App.Views.Room = Backbone.View.extend({
	template: _.template($("#room-template").html()),
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