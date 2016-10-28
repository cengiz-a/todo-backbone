module.exports = {

	entry: [
		'babel-polyfill',
		'js/views/todos.js'
		],
	output: {
		path: './bin',
		filename: 'app.bundle.js'
	},

}
