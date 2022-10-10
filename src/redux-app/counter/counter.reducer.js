// action types
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const SET_VALUE = "setValue";

// action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });

// reducer
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case SET_VALUE:
      return action.payload;

    default:
      return state;
  }
}
