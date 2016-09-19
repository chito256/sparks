import React from 'react'
import ModificationIndicator from '../containers/ModificationIndicator'
import WordCounter from '../containers/WordCounter'

const Editor = React.createClass({
  componentDidMount() {
    this.props.mountCodeMirror(this.refs.editor)
  },
  render() {
    return (
      <section id="editor" className="editor-wrapper" >
        <textarea ref="editor" className="editor-area" />
        <ModificationIndicator />
        <WordCounter />
      </section>
    )
  }
})

export default Editor
