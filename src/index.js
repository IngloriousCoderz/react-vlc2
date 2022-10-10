import React from "react";
import ReactDOM from "react-dom/client";

import App from "./react-todo-list";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <p>Hello world!</p>
//   </React.StrictMode>
// );

root.render(<App />);
