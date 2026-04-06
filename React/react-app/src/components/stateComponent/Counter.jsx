import React, { useState } from 'react'

function Counter() {
    const [count,setCounter]=useState(0);

    const handleIncrease=()=>{
        setCounter(count+1);
    }

    const handleDecrease=()=>{
        if(count>0){
            setCounter(count-1)
        }
    }
  return (
    <div style={{height:"250px", display:"flex" ,justifyContent:"center",alignItems:"center"}}>
      <div>
        <div style={{display:"flex",height:"230px",width:"300px",borderRadius:"15px",flexDirection:"column" ,justifyContent:"center",alignItems:"center",backgroundColor:"blue"}}>
        <h2 style={{color:"white"}}>Counter: {count}</h2>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
            <button onClick={handleIncrease} style={{padding:"5px", width:"50px",fontSize:"20px", fontWeight:"bold", borderRadius:"5px"}}>+</button>
            <button  onClick={handleDecrease} style={{padding:"5px", width:"50px",fontWeight:"bold",fontSize:"20px", borderRadius:"5px"}}>-</button>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Counter
