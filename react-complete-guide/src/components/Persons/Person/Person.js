import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    const style = {};
    return (
      // The props.children accesses whatever elements or text are inside each component in between the
      // opening and closing tags.
      <div className={classes.Person} style={style}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
