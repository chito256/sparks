const {ipcRenderer} = window.require('electron');

export default function togglePreview () {
	ipcRenderer.on('sparks::toggle-preview', (event, arg) => {
		const editorWrapper = document.getElementsByClassName('editor-wrapper')[0];
		const previewWrapper = document.getElementsByClassName('preview-wrapper')[0];
		// Check if full preview is on
		if (arg) {
			// Toggle full preview
			editorWrapper.classList.toggle('shrink-editor--full');
			previewWrapper.classList.toggle('extend-preview--full');
		} else {
			// Toggle half preview
			editorWrapper.classList.toggle('shrink-editor');
			previewWrapper.classList.toggle('extend-preview');
		}
	});
}