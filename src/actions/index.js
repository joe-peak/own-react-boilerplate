import { INCREASE, DECREASE } from '../actionTypes';

export const increase = payload => ({
  type: INCREASE,
  payload,
});

export const decrease = payload => ({
  type: DECREASE,
  payload
});
