const { app, BrowserWindow } = require('electron');

let window;

function createWindow () {
	const windowDefaults = {
		width: 960,
		height: 640,
		minWidth: 640,
		minHeight: 420,
	};
	window = new BrowserWindow(windowDefaults);
	window.loadURL(`file://${__dirname}/index.html`);

	window.on('closed', () => {
		window = null;
	});

	if (process.env.NODE_ENV === 'development') {
		window.openDevTools();
	}
}

app.on('ready', createWindow);

// For macOS
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (window === null) {
		createWindow();
	}
});

// Exporting the createWindow function
module.exports = createWindow;