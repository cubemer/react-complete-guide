import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'j221', name: 'Juan', age: 20},
      {id: 'v010', name: 'Geoffrey', age: 38},
      {id: 't992', name: 'Mom', age: 69}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // Outdated Lifecycle Hook; will cause warning
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // Used for 'side-effects'; (i.e. fetching http data)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

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

    // The only real way to reliably change a previous version of the state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler} />;
    }

    return (
        <Aux>
          <button onClick={() => {
            this.setState({showCockpit: false})
          }}>Remove Cockpit</button>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}/> : null}
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, styles.App) ;