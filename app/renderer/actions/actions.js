export function editText (text) {
	return { type: 'EDIT_TEXT', text: text }
}

export function openFile (text, filePath, fileName) {
	return {
		type: 'OPEN_FILE',
		text: text,
		filePath: filePath,
		fileName: fileName
	}
}