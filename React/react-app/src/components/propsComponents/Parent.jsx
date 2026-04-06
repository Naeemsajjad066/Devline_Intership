import React from 'react'
import Child from './Child'

function Parent() {
    return (
    <>
        <div style={{ height: "200px", backgroundColor: "green" ,display:"flex" ,padding:"10px", justifyContent:"center",alignItems:"center"}}>
            <h1 style={{color:"white"}}>Parent Component</h1>
            <Child name="Child Component" color="yellow" />
        </div>
    </>

    )
}

export default Parent
