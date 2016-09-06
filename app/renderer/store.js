import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import markdownReducer from './reducers/markdown';

const middleware = applyMiddleware(logger());
const store = createStore(markdownReducer, middleware);

// For testing
// store.dispatch({ type: 'EDIT_TEXT', text: '# Hello world!' });

export default store;