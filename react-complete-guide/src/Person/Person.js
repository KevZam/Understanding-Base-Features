import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;
const person = props => {
  const style = {};
  return (
    // The props.children accesses whatever elements or text are inside each component in between the
    // opening and closing tags.
    <StyledDiv>
      <div className="Person" style={style}>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    </StyledDiv>
  );
};

export default person;
