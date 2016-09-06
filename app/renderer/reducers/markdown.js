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
		default:
		 return state;
	}
}

export default markdownReducer;