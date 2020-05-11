import React, { Component } from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../hoc/Wrapper";
import styles from "./Person.css";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }

  componentDidMount() {
    // this.inputEl.focus();
    this.inputEl.current.focus();
  }

  render() {
    return (
      <Wrapper>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(el) => {this.inputEl = el; }}
          ref={this.inputEl}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Wrapper>
    );
  }
}

//This will make sure to throw error if the properties are assigned with wrong data types
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, styles.Person);
