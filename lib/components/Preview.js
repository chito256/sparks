import React from 'react';
import '../styles/themes/preview/Leo.css';

const Preview = ({ htmlText }) => {
  return (
    <section id="preview" className="preview-wrapper" >
      <div className="preview-area" dangerouslySetInnerHTML={htmlText}></div>
    </section>
  )
}

export default Preview;