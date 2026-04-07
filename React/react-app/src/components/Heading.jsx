import React from 'react'

function Heading({heading}) {
  return (
    <>
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",margin:"30px", }}>
      <button style={{width:"300px", height:"30px", borderRadius:"5px",fontWeight:"bold",fontSize:"20px"}}>
        {heading}
      </button>
    </div>
    </>
  )
}

export default Heading
