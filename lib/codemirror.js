const {getCurrentWindow} = window.require('electron').remote;
import CodeMirror from '../node_modules/codemirror/lib/codemirror.js';
import '../node_modules/codemirror/lib/codemirror.css';
import '../node_modules/codemirror/mode/markdown/markdown';
import './styles/themes/base16-light.css';
import './styles/themes/base16-dark.css';

export default function setupCodeMirror (editorNode, onContentChange) {
	let codeMirrorUserConfig = null;
	const appConfig = getCurrentWindow().appConfig;
	if (appConfig) {
		codeMirrorUserConfig = appConfig.editor;
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
		cursorBlinkRate: 600
	};
	const codeMirrorConfig = codeMirrorUserConfig != null ? {...codeMirrorDefaultConfig, ...codeMirrorUserConfig} : codeMirrorDefaultConfig;
	const codeMirrorInstance = CodeMirror.fromTextArea(editorNode, codeMirrorConfig);
	codeMirrorInstance.on('change', onContentChange);
	return codeMirrorInstance;
}