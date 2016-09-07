import md from '../utils/parser';

const initialState = {
	rawMarkdown: '',
	html: { __html: '' },
	saved: true,
	path: '',
	name: ''
}

const markdownReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'EDIT_TEXT': {
			return {
				...state,
				rawMarkdown: action.text,
				html: { __html: md.render(action.text) },
				saved: false
			}
		}
		case 'OPEN_FILE': {
			return {
				...state,
				rawMarkdown: action.text,
				html: { __html: md.render(action.text) },
				saved: true,
				path: action.filePath,
				name: action.fileName
			}
		}
		default:
		 return state;
	}
}

export default markdownReducer;