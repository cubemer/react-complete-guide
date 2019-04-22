import React from 'react'
import styles from './Person.module.css'

const person = (props) => {
  // const rnd = Math.random();
  // if (rnd >= 0.7) {
  //   throw new Error('There is an error.')
  // }

  return (
    <div className={styles.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;