import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/WithClass";

class Person extends Component {
  // We can create references to specific elements in our code by using React's
  // createRef function. After we define it as part of the constructor, we can attach
  // ref to the input element below and reference this.inputElementRef
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      // The props.children accesses whatever elements or text are inside each component in between the
      // opening and closing tags.
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

// propTypes is a special property which you add to any object or component where
// React will watch out for in dev mode and give a warning if you don't give the
// right type of props
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
