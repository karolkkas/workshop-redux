import {createStore} from "redux";
import rootReducer, {initialState} from './entities'

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(rootReducer, initialState, reduxTools)