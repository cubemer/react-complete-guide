import React from 'react';

// First way of creating an HOC
// const withClass = props => (
//   <div className={props.classes}>
//     {props.children}
//   </div>
// );

// The other way
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent/>
    </div>
  );
};

export default withClass;