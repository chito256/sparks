import React from 'react';
import {connect} from 'react-redux';
import Preview from '../components/Preview';

const PreviewContainer = React.createClass({
  render() {
    const {html} = this.props;
    return (
      <Preview htmlText={html} />
    )
  }
});

const mapStateToProps = (state) => {
  return {
    html: state.html
  }
}

export default connect(mapStateToProps)(PreviewContainer);