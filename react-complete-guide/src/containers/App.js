import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("[App.js] getDerivedStateFromProps", props);
  //   return state;
  // }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    otherstate: "other state value",
    showPersons: false
  };

  // Because objects and arrays are passed by reference, we will accidentally mutate the actual state
  // if we don't use slice() which will just copy the data into a new object, or the spread operator.
  // Always mutate state in an immutable way, make copies of the state data then modify the state with setstate
  deletePersonHandler = personIndex => {
    // Slice
    //const persons = this.state.persons.slice();
    // Spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // We use "Handler" at the end of the function to indicate that this is a method that we are
  // not actively calling but instead assigning it as an event handler
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    // create new person object from personIndex
    const person = { ...this.state.persons[personIndex] };

    //set the specific person name to whatever the user typed
    person.name = event.target.value;

    // create a new object of the current state
    const persons = [...this.state.persons];

    // set the person at the personIndex to the new person object that we created
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render");

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

// Higher order component, basically just adding some extra features and syntax to our app
export default App;
