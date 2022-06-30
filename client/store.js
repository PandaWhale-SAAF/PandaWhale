import {createStore} from 'redux';
import reducer from './reducers/index.js';

import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

export default store;
