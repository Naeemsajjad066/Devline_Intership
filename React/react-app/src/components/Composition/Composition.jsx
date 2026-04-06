import React from 'react'
import Heading from '../Heading'
function Composition(props) {
  return (
    <>
              <div style={{border:"2px solid blue", borderRadius:"10px",height:"200px",marginBottom:"10px"}}>
      {props.children}
    </div>
    </>

  )
}

export default Composition
