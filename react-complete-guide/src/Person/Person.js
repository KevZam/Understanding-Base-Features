import React from "react";

const person = props => {
  return (
    // You can't have classes inside this element, but you can run functions that might return more
    // dynamic data
    <p>
      I'm {props.name} and I am {props.age} years old!
    </p>
  );
};

export default person;
