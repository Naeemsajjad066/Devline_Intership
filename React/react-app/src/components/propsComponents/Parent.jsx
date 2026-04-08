import React from 'react'
import Child from './Child'
import Heading from '../Heading'

function Parent() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      
      <Heading heading="Props" />

      <div style={{
        height: "200px",
        backgroundColor: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "10px",
        margin: "20px auto",
        width: "80%",
        borderRadius: "8px"
      }}>
        
        <h1 style={{ color: "white", margin: 0 }}>
          Parent Component
        </h1>

        <Child name="Child Component" color="yellow" />
      </div>

    </div>
  )
}

export default Parent