import { ADD_TASK, TOGGLE_COMPLETED, REMOVE_TASK } from "./action-types";

export default function tasks(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      const maxId = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: maxId + 1, text: payload }];

    case TOGGLE_COMPLETED:
      return state.map((task) =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );

    case REMOVE_TASK:
      return state.filter((task) => task.id !== payload);

    default:
      return state;
  }
}
