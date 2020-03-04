import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
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
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 25 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // In-line styling
    const style = {
      backgroundColor: "white",
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
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
