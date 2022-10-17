import { combineReducers } from "redux";

import text from "./text";
import tasks from "./tasks";

export default combineReducers({ text, tasks });
