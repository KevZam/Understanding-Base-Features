import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
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
    // In-line styling
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                // We need a key to help react understand what elements are going to change in a list for efficiency
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length < 3) {
      classes.push("red");
    }
    if (this.state.persons.length < 2) {
      classes.push("bold");
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
