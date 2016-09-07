const view = {
	label: 'View',
	submenu: [
		{
			label: 'Toggle Preview',
			type: 'checkbox',
			checked: false,
			accelerator: 'CmdOrCtrl+P',
			click: (menuItem, browserWindow) => {
				browserWindow.webContents.send('sparks::toggle-preview');
			}
		},
		{
			label: 'Full Preview',
			type: 'checkbox',
			checked: false,
			accelerator: 'CmdOrCtrl+Shift+P',
			click: (menuItem, browserWindow) => {
				const fullPreview = true;
				browserWindow.webContents.send('sparks::toggle-preview', fullPreview);
			}
		}
	]
}

module.exports = view;