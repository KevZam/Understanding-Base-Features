import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? "red" : "green")};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

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
    let persons = null;
    let btnClass = [classes.button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  // We need a key to help react understand what elements are going to change in a list for efficiency

                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
          className={btnClass.join(" ")}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

// Higher order component, basically just adding some extra features and syntax to our app
export default App;
