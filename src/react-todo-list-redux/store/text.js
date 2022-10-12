import { SET_TEXT, ADD_TASK } from "./action-types";

export default function text(state = "", action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT:
      return payload;

    case ADD_TASK:
      return "";

    default:
      return state;
  }
}
