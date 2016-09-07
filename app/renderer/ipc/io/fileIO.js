const {ipcRenderer} = window.require('electron');
const fs = window.require('fs');
const path = window.require('path');
const { showOpenFileDialog, showSaveFileDialog } = require('./IOOperations');

export default function fileIO (appContainer) {
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
		const currentFilePath = appContainer.getInfo().path,
					currentMarkdownText = appContainer.getInfo().rawMarkdown;
		// Check if the user wants to save the file as another file
		if (arg === true) {
			showSaveFileDialog(appContainer);
		} else {
			if (currentFilePath.length !== 0) {
				fs.writeFile(currentFilePath, currentMarkdownText, 'utf8', (err) => {
					if (err) throw err;
				});
				appContainer.saveFile(currentFilePath, path.basename(currentFilePath));
			} else {
				showSaveFileDialog(appContainer);
			}
		}
	});
}