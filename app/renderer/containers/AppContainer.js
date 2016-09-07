import React from 'react';
import {connect} from 'react-redux';
import App from '../components/App';
import * as actions from '../actions/actions';
import fileIO from '../ipc/io/fileIO';

const AppContainer = React.createClass({
	componentDidMount() {
		fileIO(this);
	},
	getInfo() {
		return {
			rawMarkdown: this.props.rawMarkdown,
			saved: this.props.saved,
			path: this.props.path
		}
	},
	openFile(text, filePath, fileName) {
		this.props.openFile(text, filePath, fileName);
	},
	saveFile(filePath, fileName) {
		this.props.saveFile(filePath, fileName);
	},
	render() {
		return (
			<App />
		)
	}
});

const mapStateToProps = (state) => {
	return {
		rawMarkdown: state.rawMarkdown,
		saved: state.saved,
		path: state.path
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openFile: (text, filePath, fileName) => {
			dispatch(actions.openFile(text, filePath, fileName));
		},
		saveFile: (filePath, fileName) => {
			dispatch(actions.saveFile(filePath, fileName));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);