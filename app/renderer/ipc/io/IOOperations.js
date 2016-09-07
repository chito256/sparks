const {dialog, getCurrentWindow} = window.require('electron').remote;
const path = window.require('path');
const fs = window.require('fs');

exports.showOpenFileDialog = (appContainer) => {
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

exports.showSaveFileDialog = (appContainer) => {
	dialog.showSaveDialog({
		title: 'Save File',
		filters: [
			{ name: 'Markdown Document', extensions: ['md'] }
		]
	}, (filePath) => {
		if (filePath) {
			const fileName = path.basename(filePath),
						data = appContainer.getInfo().rawMarkdown;
			getCurrentWindow().setTitle(fileName);
			fs.writeFile(filePath, data, 'utf8', (err) => {
				if (err) throw err;
			});
			appContainer.saveFile(filePath, fileName);
		}
	});
}