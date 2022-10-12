import { configureStore } from "@reduxjs/toolkit";

import text from "./text";
import tasks from "./tasks";

const store = configureStore({
  reducer: { text, tasks },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
