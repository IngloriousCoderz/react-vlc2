import { createReducer } from "@reduxjs/toolkit";

import { setText, taskAdded } from "./action-creators";

export default createReducer("", {
  [setText](state, action) {
    return action.payload;
  },

  [taskAdded](state, action) {
    return "";
  },
});

// export default createReducer("", (builder) => {
//   builder
//     .addCase(setText, (state, action) => action.payload)
//     .addCase(addTask, (state, action) => "");
// });
