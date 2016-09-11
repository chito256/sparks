import md from '../parser';

const initialState = {
	rawMarkdown: '',
	html: { __html: '' },
	saved: true,
	path: '',
	name: '',
	initialMarkdown: ''
}

const markdownReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'EDIT_TEXT': {
			return {
				...state,
				rawMarkdown: action.text,
				html: { __html: md.render(action.text) },
				saved: action.text === state.initialMarkdown
			}
		}
		case 'OPEN_FILE': {
			return {
				...state,
				rawMarkdown: action.text,
				html: { __html: md.render(action.text) },
				saved: true,
				path: action.filePath,
				name: action.fileName,
				initialMarkdown: action.text
			}
		}
		case 'SAVE_FILE': {
			return {
				...state,
				saved: true,
				path: action.filePath,
				name: action.fileName,
				initialMarkdown: state.rawMarkdown
			}
		}
		default:
		 return state;
	}
}

export default markdownReducer;