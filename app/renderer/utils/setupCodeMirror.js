const fs = window.require('fs');
const path = window.require('path');
import CodeMirror from './codemirror/lib/codemirror.js';
import './codemirror/lib/codemirror.css';
import './codemirror/mode/markdown/markdown';
import '../styles/themes/base16-light.css';
import '../styles/themes/base16-dark.css';

export default function setupCodeMirror (editorNode, onContentChange) {
	let codeMirrorUserConfig = null;
	const userEditorConfig = fs.readFileSync(path.join(__dirname, '..', '..', 'config.json'), 'utf8');
	if (userEditorConfig) {
		codeMirrorUserConfig = JSON.parse(userEditorConfig).editor;
	}
	const codeMirrorDefaultConfig = {
		mode: 'markdown',
		value: '',
		tabSize: 2,
		theme: 'base16-light',
		lineWrapping: true,
		cursorScrollMargin: 2,
		showCursorWhenSelecting: true,
		autofocus: true,
		cursorBlinkRate: 700
	};
	const codeMirrorConfig = codeMirrorUserConfig != null ? {...codeMirrorDefaultConfig, ...codeMirrorUserConfig} : codeMirrorDefaultConfig;
	const codeMirrorInstance = CodeMirror.fromTextArea(editorNode, codeMirrorConfig);
	codeMirrorInstance.on('change', onContentChange);
	return codeMirrorInstance;
}