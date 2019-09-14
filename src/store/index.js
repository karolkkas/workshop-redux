import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer, {initialState} from './entities'

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))