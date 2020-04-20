import React, { Component } from "react";
import PropTypes from "prop-types";
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
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Wrapper>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, styles.Person);
