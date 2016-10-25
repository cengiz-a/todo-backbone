var app = app || {};

var TodoList = Backbone.Collection.extend ({
	
	model : app.Todo,

	localStorage: new backbone.LocalStorage('todos-backbone'),

	completed: function () {
		return this.filter (function (todo) {
			return todo.get('completed');
		});
	},

	remainnig: function () {
		return this.without.apply ( this, this.completed() );
	},

	nextOrder: function () {
		if (!this.length) {
			return 1;
		}
		return this.last().get('order') +1;
	},

	app.Todos = new TodoList();

})