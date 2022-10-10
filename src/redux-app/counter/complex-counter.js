// action types
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const SET_VALUE = "setValue";

// action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });

const INITIAL_STATE = { value: 0 };

// reducer
export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };

    case DECREMENT:
      return { value: state.value - 1 };

    case SET_VALUE:
      return { value: action.payload };

    default:
      return state;
  }
}
