import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  INCREMENT_SUCCESS,
  DECREMENT_SUCCESS,
} from "./actionTypes";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const incrementAction = (step) => {
  return async function (dispatch) {
    dispatch({
      type: INCREMENT_REQUEST,
    });
    await delay(2000).then(() =>
      dispatch({ type: INCREMENT_SUCCESS, payload: { step: step } })
    );
  };
};

export const decrementAction = (step) => {
  return async function (dispatch) {
    dispatch({
      type: DECREMENT_REQUEST,
    });
    await delay(2000).then(() =>
      dispatch({ type: DECREMENT_SUCCESS, payload: { step: step } })
    );
  };
};
