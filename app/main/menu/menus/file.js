const {createWindow} = require('../../../utils/createWindow');

const file = {
	label: 'File',
	submenu: [
		{
			label: 'New',
			click: (menuItem, browserWindow) => {
				createWindow();
			}
		},
		{
			label: 'Open',
			click: (menuItem, browserWindow) => {
				browserWindow.webContents.send('sparks::open-file');
			}
		},
		{
			label: 'Save',
			click: (menuItem, browserWindow) => {
				browserWindow.webContents.send('sparks::save-file');
			}
		},
		{
			label: 'Save As',
			click: (menuItem, browserWindow) => {
				const saveAs = true;
				browserWindow.webContents.send('sparks::save-file', saveAs);
			}
		}
	]
}

module.exports = file;