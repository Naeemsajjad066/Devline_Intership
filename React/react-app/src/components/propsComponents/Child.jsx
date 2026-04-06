import React from 'react'

function Child(props) {
  return (
    <div style={{height:"200px",width:"30vw",backgroundColor:props.color,margin:"10px", display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"20px" }}>
      <h1>This is Prop: {props.name}</h1>
    </div>
  )
}

export default Child
