//import React, { useState } from "react";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Archana", age: 30 },
      { name: "Susanta", age: 58 },
      { name: "Rita", age: 54 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    //Dont update state like this,react gives a warning// this.state.person[0].name = "Archana";
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: "Susanta", age: 58 },
        { name: "Rita", age: 54 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Archana", age: 30 },
        { name: event.target.value, age: 58 },
        { name: "Rita", age: 54 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // inline style
    const bstyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >
            My hobbies: Dance
          </Person>
          {/* Passing method references between components */}
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Bhuvanesh")}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button style={bstyle} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
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

/*#region stateHooks*/
// const app = props => {
//   //array destructuring (js feature)
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Archana", age: 30 },
//       { name: "Susanta", age: 58 },
//       { name: "Rita", age: 54 }
//     ]

//     //otherState: "some other value"
//     //In this example,the otherState object will not be rendered unless we set this object again
//     //when setPersonState is being called
//     //That means,we need to manually merge the other object state everytime
//     //To overcome this issue,
//     //Instead of having one big state object, we have multiple separated state slices
//     //we should create separate use state for each object
//     //The conventional way to manage states in functional components with react hooks
//   });

//   const [otherState, setOtherState] = useState("some other value");

//   //console.log(personsState,otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Arindam", age: 26 },
//         { name: "Susanta", age: 58 },
//         { name: "Rita", age: 54 }
//       ]
//       //Here, we have to mention the original state of otherState object
//       //otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a react app</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       >
//         My hobbies: Dance
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };
// export default app;
/* #endregion stateHooks*/
