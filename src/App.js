import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI, I'm a react app</h1>
        <Person name="Archana" age="30">
          My hobbies: Dance
        </Person>
        <Person name="Susanta" age="58" />
        <Person name="Rita" age="54" />
      </div>
      /* return React.createElement(
      "div",
      { classname: "app" },
      React.createElement(
        "h1",
        null,
        "Internally jsx gets translated to this statement" */
    );
  }
}

export default App;
