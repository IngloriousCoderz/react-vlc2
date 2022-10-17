import { createSlice } from "@reduxjs/toolkit";

import { taskAdded } from "react-todo-list-stories/store/thunks";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    textChanged(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [taskAdded.pending](state, action) {
      return "";
    },
  },
});

export const { textChanged } = slice.actions;
export default slice.reducer;

export const selectText = (state) => state.text;
