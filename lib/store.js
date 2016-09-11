import {createStore} from 'redux';
import markdownReducer from './reducers/markdown';

const store = createStore(markdownReducer);
export default store;