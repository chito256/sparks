import React from 'react';
import {connect} from 'react-redux';

const indicatorHidden = {
	display: 'none',
	position: 'absolute',
	bottom: '30px',
	left: '40px',
	zIndex: '5',
	color: '#424242',
	fontFamily: 'Fira Mono, Inconsolata, monospace',
	fontSize: '22px',
	select: 'none'
}

const ModificationIndicator = React.createClass({
	render() {
		const {saved} = this.props;
		const indicatorShown = saved ? indicatorHidden : {...indicatorHidden, display: 'block'};
		return (
			<span style={indicatorShown}>
				*
			</span>
		)
	}
});

const mapStateToProps = (state) => {
	return {
		saved: state.saved
	}
}

export default connect(mapStateToProps)(ModificationIndicator);