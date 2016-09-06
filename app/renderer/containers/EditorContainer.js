import React from 'react';
import Editor from '../components/Editor';
import setupCodeMirror from '../utils/setupCodeMirror';

const EditorContainer = React.createClass({
	componentDidMount() {
		this.codeMirror = setupCodeMirror(this.editorNode);
	},
	mountCodeMirror(editorNode) {
		this.editorNode = editorNode;
	},
	render() {
		return (
			<Editor mountCodeMirror={this.mountCodeMirror} />
		)
	}
});

export default EditorContainer;