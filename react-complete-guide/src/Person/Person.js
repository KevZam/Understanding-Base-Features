import React from "react";
import "./Person.css";

const person = props => {
  return (
    // The props.children accesses whatever elements or text are inside each component in between the
    // opening and closing tags.
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
