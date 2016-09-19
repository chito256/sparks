import React from 'react'
import {connect} from 'react-redux'

function countWords (str) {
  if (str.length === 0) {
    return 0
  }
  const strArr = str.trim()
  .replace(/\n/, ' ')
  .replace(/\t/, ' ')
  .split(/\s+/);
  return strArr.filter((word) => { return word.match(/\w+/) }).length
}

const wordCounterStyle = {
  display: 'block',
  position: 'absolute',
  bottom: '41px',
  right: '40px',
  zIndex: '5',
  color: '#9f9f9f',
  opacity: '0.8',
  fontFamily: 'Fira Mono, Inconsolata, monospace',
  fontSize: '14px',
  select: 'none'
}

const WordCounter = React.createClass({
  render() {
    const {rawMarkdown} = this.props
    return (
      <span style={wordCounterStyle}>
        {countWords(rawMarkdown)}
      </span>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    rawMarkdown: state.rawMarkdown
  }
}

export default connect(mapStateToProps)(WordCounter)
