import React, { useEffect } from 'react'
import styles from './Cockpit.module.css';

const cockpit = (props) => {
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   // Http request is fine to do here!
  //   const timer = setTimeout(() => {
  //     alert('Data saved to the cloud!')
  //   }, 1000);
  //   return () => {
  //
  // This is a great example for clean up work in useEffect
  //     clearTimeout(timer);
  //     console.log('[Cockpit.js] cleanup work in useEffect')
  //   }
  // }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request is fine to do here!
    const timer = setTimeout(() => {
      alert('Data saved to the cloud!')
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect')
    }
  });

  const classes = [];

  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push( styles.red ); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    classes.push( styles.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This really is working!!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
};

export default React.memo(cockpit);