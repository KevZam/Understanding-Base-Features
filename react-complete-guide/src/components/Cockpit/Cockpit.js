import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  // initialize toggleBtnRef for functional components
  const toggleBtnRef = useRef(null);

  // useEffect executes after every render cycle of the cockpit
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // We click the reference here instead of immediately after the initialization of
    // the toggleBtn because React needs a chance to first render the button before we
    // click it. Since useEffect will run after it is rendered for the first time as
    // we specified with the [] as the second argument, it will render to the DOM
    // before using this click reference.
    toggleBtnRef.current.click();
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
      <button ref={toggleBtnRef} onClick={props.clicked} className={btnClass}>
        {" "}
        Toggle Persons{" "}
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in </button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
