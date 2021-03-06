import React, { useEffect, useRef } from "react";
import styles from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef();
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();

    //Here we can do actions like Http request

    setTimeout(() => {
      console.log("Saved data to cloud!");
    }, 1000);
    //useEffect gets executed after react renders something
    //To avoid useEffect being called everytime a render happens we can pass a conditional argument to useEffect
    return () => {
      console.log("[Cockpit.js] useEffect cleanup code");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  //we can have multiple useEffect calls in a component
  const styleClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength >= 2) {
    styleClasses.push(styles.fuchsia);
  }
  if (props.personsLength >= 1) {
    styleClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={styleClasses.join(" ")}>This is really working.</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
