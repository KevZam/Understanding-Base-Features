import React, { PureComponent } from "react";
import Person from "./Person/Person";

// We use a PureComponent here to basically have the same functionality of 
// shouldComponentUpdate. But a PureComponent basically checks for changes in all of 
// the props by default so you don't have to manually check them. 
class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("[Persons.js] getDerivedStateFromProps");
  //     return state;
  //   }

  // Should component update will return a boolean as to whether or not it should keep updating.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // You can use getSnapshotBefore update to grab a snapshot and pass that information to componentDidUpdate
  // if you want it to do something with that info
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot" };
  }

  // passing the snapshot to componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] ComponentDidUpdate");
    console.log(snapshot);
  }

  // test commit 
  // componentwillUnmount is used to cleanup anything after the component is removed.
  componentWillUnmount() {
    console.log("[Persons.js] ComponentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
