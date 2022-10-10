import { combineReducers } from "redux";

import text from "./text";
import tasks from "./tasks";

export default combineReducers({ text, tasks });

// function combineReducers(reducers) {
//   return (state = {}, action) =>
//     Object.keys(reducers).reduce((acc, name) => {
//       acc[name] = reducers[name](state[name], action);
//       return acc;
//     }, {});
// }

// export default function todoList(state = {}, action) {
//   return {
//     text: text(state.text, action),
//     tasks: tasks(state.tasks, action),
//   };
// }

// export default function todoList(state = { text: "", tasks: [] }, action) {
//   const { type } = action;

//   switch (type) {
//     case SET_TEXT:
//       return {
//         ...state,
//         text: text(state.text, action),
//       };

//     case ADD_TASK:
//       return {
//         // text: text(state.text, setText("")),
//         text: text(state.text, action),
//         tasks: tasks(state.tasks, action),
//       };

//     case TOGGLE_COMPLETED:
//     case REMOVE_TASK:
//       return {
//         ...state,
//         tasks: tasks(state.tasks, action),
//       };

//     default:
//       return state;
//   }
// }
