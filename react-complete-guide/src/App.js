import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    //   return (
    //     <div className="App">
    //       <h1>Hi, I'm a React App</h1>
    //     </div>
    //   );

    // Create Element's first element can be a div, or your own react component.
    // The second arguement would be a javascript object that configures it,
    // the third argument would be the children or whatever is nested within this element.
    return React.createElement(
      "div",
      null,
      React.createElement("h1", { className: "App" }, "Hi, I'm a React App!!!")
    );
  }
}

export default App;
