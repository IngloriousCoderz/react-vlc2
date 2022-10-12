import { SET_TASKS } from "./action-types";

export default function tasks(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TASKS:
      return payload;

    default:
      return state;
  }
}
