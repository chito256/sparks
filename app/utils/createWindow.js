const {BrowserWindow} = require('electron');

exports.createWindow = () => {
	const windowDefaults = {
		width: 960,
		height: 640,
		minWidth: 640,
		minHeight: 420,
	};
	let window = new BrowserWindow(windowDefaults);
	window.loadURL(`file://${__dirname}/../index.html`);

	window.on('closed', () => {
		window = null;
	});

	if (process.env.NODE_ENV === 'development') {
		window.openDevTools();
	}
}