import React, { Component } from "react";
import Wrapper from "../../../hoc/Wrapper";
import styles from "./Person.css";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  render() {
    return (
      <Wrapper>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Wrapper>
    );
  }
}

export default withClass(Person, styles.Person);
