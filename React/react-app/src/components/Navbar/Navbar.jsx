import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <nav style={{width:"100%",height:"60px"}}>
            <ul style={{display:"flex", justifyContent:"center",alignItems:"center",listStyle:"none",padding:0,margin:0,backgroundColor:"#1f2937",height:"60px",gap:"20px",color:"#ffffff",fontSize:"20px"}}>
                <li><Link to={"/"} style={{cursor:"pointer",textDecoration:"none",color:"white"}}>Home</Link></li>
                <li><Link to={"/hooks"} style={{cursor:"pointer",textDecoration:"none",color:"white"}}>Hooks</Link></li>
                <li><Link to={"/HooksPlaygroundApp"} style={{cursor:"pointer",textDecoration:"none",color:"white"}}>Contact Us</Link></li>
            </ul>
        </nav>

        </>
    )
}

export default Navbar
