import React from "react";
import styled from "styled-components";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person" style={style}>
      <div>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </div>
  );
};

export default person;
