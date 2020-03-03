import React from "react";

const person = props => {
  return (
    // The props.children accesses whatever elements or text are inside each component in between the
    // opening and closing tags.
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
