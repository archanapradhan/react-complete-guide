import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
  getSnapshotBeforeUpdate() {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person,js] componentDidUpdate.");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log(
      "[Person.js] componentWillUnmount- This block can have the clean up code, the kind that needs to be executed before removing a component."
    );
  }
  render() {
    console.log("[Person.js] rendering..");
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
