import React from 'react'
import Composition from './Composition'
import Heading from '../Heading'
function Composite() {
  return (
<>
          <Heading heading="Composition" />
<div style={{display:"flex", gap:"20px",justifyContent:"center"}}>
      <Composition>
        <h1>This is Composite component</h1>
      </Composition>
      <Composition>
        <h2>This is also a composite component</h2>
      </Composition>
</div>

</>
  )
}

export default Composite
