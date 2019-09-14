import * as constants from './constants';
import {increase} from "../count/actions";

const addTodo = (name, id, done) => ({
  type: constants.ADD_TODO,
  payload: {
    name,
    done,
    id,
  }
})

export const handleAddTodo = (name, isDone) => (dispatch, getState) => {
  dispatch(increase());
  const id = getState().count;
  dispatch(addTodo(name, id, isDone));
}

export const deleteTodo = (id) => ({
  type: constants.DELETE_TODO,
  payload: id,
});

export const setDone = (id, done) => ({
  type: constants.SET_DONE,
  payload: {
    id,
    done
  },
});
