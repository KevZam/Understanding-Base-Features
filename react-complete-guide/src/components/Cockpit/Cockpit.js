import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  // useEffect executes for every render cycle of the cockpit
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
    // you can pass a second argument array to useEffect that determines when it should run based on whether or not
    // the props you give it changed. Additionally, if you want it to just run once when the component
    // renders the first time (like ComponentDidMount)you can just pass an empty array to it here
  }, []);

  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength < 3) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength < 2) {
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

export default React.memo(cockpit);
