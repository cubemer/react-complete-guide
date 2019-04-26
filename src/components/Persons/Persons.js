import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // we don't do anything to state, this will cause a warning
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return {};
  // }

  // Legacy method, causes warning
  // componentWillReceiveProps(nextProps, nextContext) {
  //   console.log('[Persons.js] componentWillReceiveProps');
  // }

  // Bad code below. Instead of checking all props for a change
  // extend PureComponent, which does that by default
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   );
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // Legacy method, causes warning
  // componentWillUpdate(nextProps, nextState, nextContext) {
  // }

  // Most used hook, by far!
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render() {
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  };
}

export default Persons;