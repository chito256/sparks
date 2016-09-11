import React from 'react';
import EditorContainer from '../containers/EditorContainer';
import PreviewContainer from '../containers/PreviewContainer';

const App = () => {
	return (
		<div className="app-wrapper">
			<EditorContainer />
			<PreviewContainer />
		</div>
	)	
}

export default App;