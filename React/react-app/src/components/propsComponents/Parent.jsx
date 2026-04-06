import React from 'react'
import Child from './Child'
import Heading from '../Heading'

function Parent() {
    return (
    <>
          <Heading heading="Props" />
        <div style={{ height: "200px", backgroundColor: "green" ,display:"flex" ,padding:"10px", justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"white"}}>Parent Component</h1>
            <Child name="Child Component" color="yellow" />
        </div>
    </>

    )
}

export default Parent
