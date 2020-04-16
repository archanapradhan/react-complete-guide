import React, { useEffect } from "react";
import styles from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
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

  if (props.persons.length >= 2) {
    styleClasses.push(styles.fuchsia);
  }
  if (props.persons.length >= 1) {
    styleClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={styleClasses.join(" ")}>This is really working.</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
