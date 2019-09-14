import * as constants from './constants';

export const increase = () => ({
  type: constants.INCREASE
});

export const decrease = () => ({
  type: constants.DECREASE
});

export const reset = () => ({
  type: constants.RESET
});

export const setCount = (value) => ({
  type: constants.SET_COUNT,
  payload: value
});
