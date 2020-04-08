import React from "react";
import styled from "styled-components";
//import "./Person.css";

//As the name suggests Styled components returns a class-based/funcrtional component
const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;
const person = (props) => {
  // const style = {
  //   "@media(min-width:500px)": {
  //     width: "400px"
  //   }
  // };

  //dummy case to raise error for Error Boundary
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }

  return (
    // <div className="Person" style={style}>
    <StyleDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
    //</div>
  );
};

export default person;
