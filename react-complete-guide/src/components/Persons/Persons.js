import React from "react";
import Person from "./Person/Person";

// This time we don't need the () in the first arrow function because the props.person.map is just reg javascript
const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

export default persons;
