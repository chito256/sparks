const {ipcRenderer} = window.require('electron');
const {dialog, getCurrentWindow} = window.require('electron').remote;
const path = window.require('path');
const fs = window.require('fs');

function showOpenFileDialog (appContainer) {
	dialog.showOpenDialog({
		title: 'Open File',
		filters: [
			{ name: 'Markdown Document', extensions: ['md'] }
		],
		properties: ['openFile']
	}, (filePaths) => {
		if (filePaths) {
			const fileName = path.basename(filePaths[0]),
						fileData = fs.readFileSync(filePaths[0], 'utf8');
			getCurrentWindow().setTitle(fileName);
			appContainer.openFile(fileData, filePaths[0], fileName);
		}
	});
}

function showSaveFileDialog (appContainer) {
	dialog.showSaveDialog({
		title: 'Save File',
		filters: [
			{ name: 'Markdown Document', extensions: ['md'] }
		]
	}, (filePath) => {
		if (filePath) {
			const fileName = path.basename(filePath);
			getCurrentWindow().setTitle(fileName);
		}
	});
}

const fileIO = (appContainer) => {
	// Listens for file open operation
	// ===============================
	ipcRenderer.on('sparks::open-file', (event, arg) => {
		const currentSaveState = appContainer.getInfo().saved;
		if (currentSaveState === false) {
			const confirmOpenFile = confirm(`File is not saved. Continue anyway?`);
			if (confirmOpenFile) {
				showOpenFileDialog(appContainer);
			}
		} else {
			showOpenFileDialog(appContainer);
		}
	});

	// Listens for file save operation
	// ===============================
	ipcRenderer.on('sparks::save-file', (event, arg) => {
		const currentFilePath = appContainer.getInfo().filePath,
					currentMarkdownText = appContainer.getInfo().rawMarkdown;
		// Check if the user wants to save the file as another file
		if (arg === true) {
			showSaveFileDialog(appContainer);
		} else {
			if (currentFilePath) {
				fs.writeFile(currentFilePath, currentMarkdownText, 'utf8', (err) => {
					if (err) throw err;
				});
			} else {
				showSaveFileDialog(appContainer);
			}
		}
	});
}

module.exports = fileIO;