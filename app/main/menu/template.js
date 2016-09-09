const file = require('./menus/file');
const edit = require('./menus/edit');
const view = require('./menus/view');
const help = require('./menus/help');

const template = [
	file,
	edit,
	view,
	help
]

module.exports = template