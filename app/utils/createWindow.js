const {BrowserWindow} = require('electron');
const fs = require('fs');
const path = require('path');

exports.createWindow = () => {
	const windowDefaults = {
		width: 960,
		height: 640,
		minWidth: 640,
		minHeight: 420,
	};
	let window = new BrowserWindow(windowDefaults);
	window.loadURL(`file://${__dirname}/../index.html`);

	window.userConfig = fs.readFileSync(path.join(__dirname, '..', 'config.json'), 'utf8');

	window.on('closed', () => {
		window = null;
	});

	if (process.env.NODE_ENV === 'development') {
		window.openDevTools();
	}
}