import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component{
  state = {
    persons: [
      {id: 'j221', name: 'Juan', age: 20},
      {id: 'v010', name: 'Geoffrey', age: 38},
      {id: 't992', name: 'Mom', age: 69}
    ]
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons})
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}><Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.changeNameHandler(event, person.id)}/></ErrorBoundary>
        })}
      </div>);

      btnClass = styles.Red;
    }

    let classes = [];
    
    if (this.state.persons.length <= 2) {
      classes.push( styles.red ); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push( styles.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={styles.App}>
          <h1>Hi, I am a react app.</h1>
          <p className={classes.join(' ')}>This really is working!!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App ;