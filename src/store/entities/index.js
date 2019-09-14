import {combineReducers} from "redux";
import count, {initialState as initialCountState} from './count/reducer';
import todos, {initialState as initialTodosState} from './todos/reducer';

export const initialState = {
  ...initialCountState,
  ...initialTodosState
}

export default combineReducers({
  count,
  todos,
})