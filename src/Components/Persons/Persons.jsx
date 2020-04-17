import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
  shouldCompoenentUpdate(nextProps, nextState) {
    console.log("[Perosns.js] shouldComponentUpdate");
    //shouldComponentUpdate is very powerful and comes handy to improve performance by controlling rendering elements
    //As the array objects are reference types their pointers are being compared.
    //Hence its important to create copies while making changes to reference types. We have already doe this in app.js namechangedHandler

    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate() {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate.");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log(
      "[Person.js] componentWillUnmount- This block can have the clean up code, the kind that needs to be executed before removing a component."
    );
  }
  render() {
    console.log("[Persons.js] rendering..");
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
