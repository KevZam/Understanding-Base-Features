import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length < 2) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div classes={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button onClick={props.clicked} className={btnClass}>
        {" "}
        Toggle Persons{" "}
      </button>
    </div>
  );
};

export default cockpit;
