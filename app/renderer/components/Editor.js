import React from 'react';

const Editor = React.createClass({
	componentDidMount() {
		this.props.mountCodeMirror(this.refs.editor);
	},
	render() {
		return (
			<section id="editor" className="editor-wrapper" >
				<textarea ref="editor" className="editor-area" />
			</section>
		)
	}
});

export default Editor;