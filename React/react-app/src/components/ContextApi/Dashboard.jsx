import React, { useContext } from 'react'
import Profile from './Profile'
import Heading from '../Heading'
import { appContext } from '../../context/Context'
function Dashboard() {

  const {theme,setTheme}=useContext(appContext)

  return (
    <>
    <Heading heading="Context Api"/>
        <div style={{ height: "600px", backgroundColor:theme=="dark"?"#121212":"#484b6a",display:"flex",alignItems:"center",color:theme=="dark"?"#EDEDED":"#e4e5f1", flexDirection:"column" }}>
      <div>
        <h1>Dashboard</h1>

      </div>
      <div style={{ width: "30vw", height: "500px", backgroundColor:theme=="dark"?"#2d2c2c":"#9394a5", borderRadius:"20px",display:"flex",alignItems:"center",flexDirection:"column"}}>
        <Profile />
      </div>

    </div>
    
    </>

  )
}

export default Dashboard
