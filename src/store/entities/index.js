import {combineReducers} from "redux";
import count, {initialState as initialCountState} from './count/reducer';


export const initialState = {
    ...initialCountState
}

export default combineReducers({
    count,

})