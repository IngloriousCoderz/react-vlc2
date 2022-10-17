import { createReducer } from "@reduxjs/toolkit";

import { taskAdded, toggleCompleted, removeTask } from "./action-creators";

export default createReducer([], {
  [taskAdded](state, action) {
    const maxId = state.length ? state[state.length - 1].id : 0;
    state.push({ id: maxId + 1, text: action.payload });
  },

  [toggleCompleted](state, action) {
    const task = state.find((task) => task.id === action.payload);
    task.completed = !task.completed;
  },

  [removeTask](state, action) {
    return state.filter((task) => task.id !== action.payload);
  },
});

// export default createReducer([], (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       const maxId = state.length ? state[state.length - 1].id : 0;
//       // return [...state, { id: maxId + 1, text: action.payload }];

//       state.push({ id: maxId + 1, text: action.payload });
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       // return state.map((task) =>
//       //   task.id === action.payload
//       //     ? { ...task, completed: !task.completed }
//       //     : task
//       // );

//       const task = state.find((task) => task.id === action.payload);
//       task.completed = !task.completed;
//     })
//     .addCase(removeTask, (state, action) =>
//       state.filter((task) => task.id !== action.payload)
//     );
// });
