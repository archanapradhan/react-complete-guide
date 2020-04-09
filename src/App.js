//import React, { useState } from "react";
import React, { Component } from "react";
import appClasses from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      { id: "sgdf1", name: "Archana", age: 30 },
      { id: "sgdf2", name: "Susanta", age: 58 },
      { id: "sgdf3", name: "Rita", age: 54 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    const persons = { ...this.state.persons };

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    //latest js way is to use spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnClass = "";

    //let styleClasses = ["bold", "mutedRose"].join(" ");
    const styleClasses = [];
    if (this.state.persons.length >= 2) {
      styleClasses.push("fuchsia");
    }
    if (this.state.persons.length >= 1) {
      styleClasses.push("bold");
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = appClasses.Red;
      // bstyle.backgroundColor = "pink";
      // bstyle[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "white"
      // };
    }
    //npm install --save radium - radium pkg allows us to use inline styles with pseudo selectors and media queries
    //npm install --save styled-components
    return (
      <div className={appClasses.App}>
        <h1>Hi, I'm a react app</h1>
        <p className={styleClasses.join(" ")}>This is really working.</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
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
