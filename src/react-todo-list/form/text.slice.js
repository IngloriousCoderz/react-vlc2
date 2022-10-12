import { createSlice } from "@reduxjs/toolkit";

import { taskAdded } from "react-todo-list/store/action-creators";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    textChanged(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [taskAdded](state, action) {
      return "";
    },
  },
});

export const { textChanged } = slice.actions;
export default slice.reducer;
