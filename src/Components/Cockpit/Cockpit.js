import React from "react";
import styles from "./Cockpit.css";

const cockpit = (props) => {
  //let styleClasses = ["bold", "mutedRose"].join(" ");
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
