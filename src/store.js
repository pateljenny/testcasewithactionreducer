import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './Reducer/reducer';
const composeEnhancer = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancer(applyMiddleware(thunk));

const state = {
    token: '',
    error: ''
}
const store = createStore(reducer, state, enhancer);

export default store;