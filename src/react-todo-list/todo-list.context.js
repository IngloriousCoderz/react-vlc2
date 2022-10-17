import { createContext } from "react";

export const StateContext = createContext({ text: "", tasks: [] });
export const DispatchContext = createContext(() => {});
