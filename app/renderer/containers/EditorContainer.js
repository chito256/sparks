import React from 'react';
import {connect} from 'react-redux';
import Editor from '../components/Editor';
import setupCodeMirror from '../utils/setupCodeMirror';
import * as actions from '../actions/actions';

const EditorContainer = React.createClass({
	// Setup a new CodeMirror instance
	componentDidMount() {
		this.codeMirror = setupCodeMirror(this.editorNode, this.onContentChange);
	},
	// Append text to CodeMirror on edit
	componentWillReceiveProps(nextProps) {
		if (this.codeMirror.getValue() != nextProps.rawMarkdown) {
			this.codeMirror.setValue(nextProps.rawMarkdown);
		}
	},
	//  Get textarea's DOM node
	mountCodeMirror(editorNode) {
		this.editorNode = editorNode;
	},
	// Update rawMarkdown
	onContentChange(doc, change) {
		if (change.origin !== 'setValue') {
			this.props.handleChange(this.codeMirror.getValue());
		}
	},
	render() {
		return (
			<Editor mountCodeMirror={this.mountCodeMirror} />
		)
	}
});

const mapStateToProps = (state) => {
	return {
		rawMarkdown: state.rawMarkdown
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: (text) => {
			dispatch(actions.editText(text));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);