import React, { useEffect } from 'react';
import Test from './Test';
import Heading from '../Heading';

// Higher-Order Component definition
const Hoc = (WrappedComponent) => {
  // Return a new functional component

   const EnhancedComponent=(props)=> {
      useEffect(()=>{
console.log("Hello World 1 11")
  })
    return (
      <div>
     <Heading heading="High Order Component" />
        {/* Pass all props down to the wrapped component */}
        <WrappedComponent {...props} />
      </div>
    );
  };
  return EnhancedComponent;
};

export default Hoc;
