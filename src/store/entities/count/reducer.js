import * as constants from './constants';

export const initialState = 0;

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case constants.INCREASE:
      return state + 1;
    case constants.DECREASE:
      return state - 1;
    case constants.RESET:
      return 0;
    case constants.SET_COUNT:
      return Number(payload);
    default:
      return state;
  }
};