import React, { Component } from 'react'
// import withClass from '../../hoc/withClass'
// import Aux from '../../hoc/Aux';
import styles from './Person.module.css'

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }

    // Rendering adjacent JSX components with an HOC
  //   return (
  //     <Aux>
  //       <p key='i1' onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
  //       <p key='i2' >{this.props.children}</p>
  //       <input key='i3' onChange={this.props.changed} value={this.props.name}/>
  //     </Aux>
  //   )
  // };
}

export default Person;