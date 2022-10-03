import classes from "./react-app.module.scss";

console.log(classes);

// import { Component } from "react";

// class ReactApp extends Component {
//   render() {
//     const { who } = this.props;

//     return (
//       <p className="paragraph">
//         <span>Hello {who}!</span>
//       </p>
//     );
//   }
// }

function ReactApp({ who, background }) {
  return (
    <p className={classes.paragraph} style={{ backgroundColor: background }}>
      <span>Hello {who}!</span>
    </p>
  );
}

// ...
export default ReactApp;
