import React from "react";

// const withClass = (props) => (
//   <div className={props.classes}>{props.children}</div>
// );

//The following code is a normal js function that returns a funtional component
const withClass = (WrappedCompoenent, classNameArg) => {
  return (props) => (
    <div className={classNameArg}>
      <WrappedCompoenent {...props} />
    </div>
  );
};

export default withClass;
