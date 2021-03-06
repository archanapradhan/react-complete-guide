//import React, { useState } from "react";
import React, { Component } from "react";
import styles from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Wrapper from "../hoc/Wrapper";

class App extends Component {
  state = {
    persons: [
      { id: "sgdf1", name: "Archana", age: 30 },
      { id: "sgdf2", name: "Susanta", age: 58 },
      { id: "sgdf3", name: "Rita", age: 54 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex]);

    const persons = { ...this.state.persons };

    person.name = event.target.value;
    persons[personIndex] = person;

    //its a good practice to send prevState as parameter if the states depend on old value of the state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        //changeCounter: this.state.changeCounter + 1,
        changeCounter: prevState.changeCounter + 1,
      };
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

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    //Powerful enough to enhance the performance as we can control the rendering
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }
    //npm install --save radium - radium pkg allows us to use inline styles with pseudo selectors and media queries
    //npm install --save styled-components
    return (
      // <WithClass classes={styles.App}>
      <Wrapper>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Wrapper>
      // </WithClass>

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
export default withClass(App, styles.App);

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
