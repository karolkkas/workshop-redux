import * as constants from './constants';

export const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case constants.ADD_TODO:
      return [...state, payload];
    case constants.DELETE_TODO:
      return [...state].filter(todo => todo.id !== payload);
    case constants.SET_DONE:
      return [...state].map(todo => payload.id === todo.id ? {
          ...todo,
          done: payload.done
        } : todo
      );
    default:
      return state;
  }
};