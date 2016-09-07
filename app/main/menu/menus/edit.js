const {BrowserWindow} = require('electron');

const edit = {
	label: 'Edit',
	submenu: [
		{
			role: 'copy'
		},
		{
			role: 'cut'
		},
		{
			role: 'paste'
		},
		{
			type: 'separator'
		},
		{
			role: 'redo'
		},
		{
			role: 'undo'
		},
		{
			role: 'delete'
		},
		{
			type: 'separator'
		},
		{
			label: 'Preferences',
			click: (menuItem, browserWindow) => {
				const window = new BrowserWindow({ width: 420, height: 480, resizable: false });
				window.loadURL(`file://${__dirname}/../../../settings.html`);
			}
		}
	]
}

module.exports = edit;