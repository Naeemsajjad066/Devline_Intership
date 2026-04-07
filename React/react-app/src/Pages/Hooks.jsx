import React from 'react'
import HookNavbar from '../components/Navbar/HookNavbar'
import { Outlet } from 'react-router-dom'

function Hooks() {
  return (
    <>
    <HookNavbar/>
    <Outlet/>
    </>

  )
}

export default Hooks
